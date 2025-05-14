import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
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
//       host: '1d59-49-43-6-52.ngrok-free.app', // ngrok hostname only (without https)
//     },
//   },
// })
