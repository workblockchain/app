import react from "@vitejs/plugin-react-swc"
import {OutputOptions} from "rollup"
import {AliasOptions, defineConfig} from "vite"

const alias: AliasOptions = {
  "@": "/src",
  "@assets": "/src/assets",
  "@components": "/src/components",
  "@routes": "/src/routes",
}

const output: OutputOptions = {
  assetFileNames: "[hash].[ext]",
  chunkFileNames: "[hash].js",
  entryFileNames: "[hash].js",
}

export default defineConfig({
  plugins: [react()],
  base: "./",
  resolve: {alias},
  build: {
    emptyOutDir: true,
    rollupOptions: {output},
  },
})
