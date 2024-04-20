import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  base: "react-pizza-v-2.0",
  plugins: [react()],
})
