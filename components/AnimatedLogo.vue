<template>
  <svg xmlns="http://www.w3.org/2000/svg" width="518" height="140" viewBox="0 0 518 140">
    <g ref="gridContainer"></g>
  </svg>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'

const gridContainer = ref(null)
let animationFrameId = null

onMounted(() => {
  // PARAMETERS
  const ROWS = 10
  const COLS = 37
  const PITCH = 14
  const PHASE_DURATION = 3500 // ms
  const TOTAL_CYCLE = 6 * PHASE_DURATION
  
  // TARGET PATTERN (0=OFF, 1=ON) from infotp.csv
  // 37 columns per row
  const TARGET_PATTERN = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0],
    [0,1,1,1,1,0,0,1,0,1,0,0,0,0,1,1,0,0,0,0,1,1,1,0,0,1,1,1,1,1,0,1,0,1,1,0,0],
    [0,0,0,1,1,0,0,1,1,0,1,1,0,1,1,1,1,1,0,1,1,0,1,1,0,0,1,1,0,0,0,1,1,0,1,1,0],
    [0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0],
    [0,0,0,1,1,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0,0,1,1,0,0,0,1,1,0,0,1,0],
    [0,1,1,1,1,1,0,1,1,0,0,1,0,1,1,1,1,0,0,0,1,1,1,0,0,0,0,1,1,1,0,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]

  // STATE
  let circles = []
  let lastTime = 0
  
  // Initialize Grid
  const container = gridContainer.value
  
  for (let r = 0; r < ROWS; r++) {
    let rowArr = []
    for (let c = 0; c < COLS; c++) {
      let circle = document.createElementNS("http://www.w3.org/2000/svg", "circle")
      circle.setAttribute("cx", c * PITCH + 5)
      circle.setAttribute("cy", r * PITCH + 5)
      circle.setAttribute("r", 5)
      circle.setAttribute("fill-opacity", "0.1") // Default OFF
      container.appendChild(circle)
      
      rowArr.push({
        el: circle,
        val: 0, 
        locked: false
      })
    }
    circles.push(rowArr)
  }

  function update(time) {
    if (!lastTime) lastTime = time
    
    // Cycle is 12000ms typically, but let's base it on remainder
    let t = time % TOTAL_CYCLE
    // Phase 0..5
    let phase = Math.floor(t / PHASE_DURATION)
    
    // Logic breakdown
    // Phase 0 (1st sixth): All OFF start, randomly changing.
    // Phase 1 (2nd): Stick to TARGET.
    // Phase 2 (3rd): Hold TARGET.
    // Phase 3 (4th): Hold TARGET.
    // Phase 4 (5th): Random changing.
    // Phase 5 (6th): Stick to OFF.

    // Determine behavior
    let probabilityFlip = 0.05 // Chance to flip state per frame if free
    let targetGrid = null // null means no target sticking
    let sticking = false
    let holding = false

    if (phase === 0) {
      // Random noise, start from OFF effectively implies we just flip around
      probabilityFlip = 0.02
      sticking = false
    } else if (phase === 1) {
      // Stick to Target
      targetGrid = TARGET_PATTERN
      sticking = true
      probabilityFlip = 0.08 // High activity until stuck
    } else if (phase === 2 || phase === 3) {
      // Hold Target
      holding = true
      targetGrid = TARGET_PATTERN
    } else if (phase === 4) {
      // Random noise again
      probabilityFlip = 0.02
      sticking = false // unlocking
    } else if (phase === 5) {
      // Stick to OFF
      targetGrid = "OFF" // special marker
      sticking = true
      probabilityFlip = 0.08
    }

    for (let r = 0; r < ROWS; r++) {
      for (let c = 0; c < COLS; c++) {
        let cell = circles[r][c]
        
        if (holding) {
          // Forced state
          let desired = (targetGrid === "OFF") ? 0 : targetGrid[r][c]
          if (cell.val !== desired) {
            cell.val = desired
            cell.el.setAttribute("fill-opacity", cell.val ? "1.0" : "0.1")
          }
          continue // Next cell
        }

        // Sticking logic
        if (sticking) {
          let desired = (targetGrid === "OFF") ? 0 : targetGrid[r][c]
          
          // If already matches desired, keep it (stick)
          if (cell.val === desired) {
            // It is stuck. Do nothing.
            // unless we want to ensure it stays stuck even if we accidentally flipped it?
            // The logic says "when one cell hits the final state it stays there".
            // So we just don't touch it.
            // However, we need to ensure we correct it if it was somehow wrong from previous phase?
            // No, previous phase + random meant it might be wrong.
            // Once it is right, we lock it.
            continue 
          }
        }

        // Random flip
        if (Math.random() < probabilityFlip) {
          cell.val = (cell.val === 1) ? 0 : 1
          cell.el.setAttribute("fill-opacity", cell.val === 1 ? "1.0" : "0.1")
        }
      }
    }

    animationFrameId = requestAnimationFrame(update)
  }

  animationFrameId = requestAnimationFrame(update)
})

onBeforeUnmount(() => {
  if (animationFrameId) {
    cancelAnimationFrame(animationFrameId)
  }
})
</script>

<style scoped>
svg :deep(circle) {
  fill: currentColor;
  transition: opacity 0.1s linear;
}
</style>
