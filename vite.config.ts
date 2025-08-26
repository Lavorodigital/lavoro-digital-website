import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// Config mínima e válida pro build (não deixe nada depois disso)
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
})