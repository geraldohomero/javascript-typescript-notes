import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

{
  esbuild: {
    jsxInject: (str: string) => !str.includes('import React') ? "import React from 'react'" : ""
  }
}
