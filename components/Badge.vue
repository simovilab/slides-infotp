<script setup>
const props = defineProps({
  value: {
    type: String,
    required: true
  },
  color: {
    type: String,
    default: '#00C0F3'
  }
})
</script>

<template>
  <span class="badge" :style="{ backgroundColor: color }">
    {{ value }}
  </span>
</template>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-weight: 600;
  font-size: 0.875rem;
  color: #000000;
  line-height: 1;
}
</style>
