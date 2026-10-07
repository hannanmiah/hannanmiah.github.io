import { defineConfig } from 'shaders/config'

export default defineConfig({
  // Components are imported from 'shaders/vue'
  framework: 'vue',
  // Where `npx shaders install` writes component files
  outDir: 'components/shaders'
})
