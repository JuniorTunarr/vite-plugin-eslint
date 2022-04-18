import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import eslint from '../../'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), eslint({ include: 'playground/vue/src/**/*', cacheLocation: '.eslintcache' })],
})