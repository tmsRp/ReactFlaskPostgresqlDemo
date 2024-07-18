import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})


/*
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  build: {
    assetsDir: 'static',
  }
});
*/


/*
export default defineConfig({
 base: "/",
 plugins: [react()],
 preview: {
  port: 80,
  strictPort: true,
 },
 server: {
  port: 80,
  strictPort: true,
  host: true,
  origin: "http://0.0.0.0:80",
 },
});
*/




// https://levelup.gitconnected.com/packaging-front-end-react-applications-under-a-production-environment-with-vite-and-nginx-in-docker-7e2739bc0494
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import path from 'path';
// import dotenv from 'dotenv';

// export default defineConfig(({ mode }) => {
//     const envFile = mode === 'development' ? '.env.development' : '.env.production';
//     dotenv.config({ path: envFile });
//     return {
//         plugins: [react()],
//         build: {
//             outDir: 'build',
//             assetsDir: 'assets',
//             emptyOutDir: true,
//         },
//         resolve: {
//             alias: {
//                 '@': path.resolve(__dirname, './src'),
//             },
//         },
//         server: {
//             proxy: {
//                 '/api': {
//                     target: process.env.VITE_API_BASE_URL,
//                     changeOrigin: true,
//                 },
//             },
//         },
//     };
// });