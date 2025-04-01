import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path'; // ✅ 추가

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb'], // ✅ GLB 파일 포함
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // ✅ @ = src 폴더로 인식
    },
  },
});
