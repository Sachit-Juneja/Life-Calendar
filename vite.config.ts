import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

// Vite may throw error. Uninstall vite and run below command to reinstall and try again.
// npm install vite @vitejs/plugin-react-swc
