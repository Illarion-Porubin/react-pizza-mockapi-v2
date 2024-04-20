import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


// https://vitejs.dev/config/
export default defineConfig({
  base: "/react-pizza-mockapi-v2",
  plugins: [react()],
})
