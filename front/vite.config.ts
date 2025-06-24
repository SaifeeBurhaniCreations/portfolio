import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: 'esbuild',
  },
})


// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: true, // Enables LAN and external access (e.g. via ngrok)
//     port: 5173,
//     strictPort: true,
//     cors: true,
//     hmr: {
//       protocol: 'ws',
//       host: 'c515-1-187-181-66.ngrok-free.approk hostname only (without https)
    // },
//     allo// wedHosts: [
      // 'c// 164-240c515-1-187-181-66.ngrok-free.app})
// // 