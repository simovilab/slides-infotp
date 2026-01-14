import { defineMermaidSetup } from '@slidev/types'

export default defineMermaidSetup(() => {
  return {
    theme: 'base',
    fontFamily: 'Google Sans, sans-serif',
    themeVariables: {
      lineColor: '#FFFFFF',
      primaryBorderColor: '#FFFFFF',
      primaryTextColor: '#FFFFFF',
      mainBkg: '#005DA4',
      secondaryColor: '#008641',
      noteTextColor: '#FFFFFF',
      
    }
  }
})