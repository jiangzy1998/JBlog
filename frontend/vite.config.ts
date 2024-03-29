import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [
    react(),
    tsconfigPaths()
  ],
  resolve: {
    //别名配置
    alias: {
      '@assets': path.join(__dirname, 'src/assets')
    }
  },
  css:{
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        math: "always",
        javascriptEnabled: true, // 启用内联 JavaScript
      },
    }
  }
})

