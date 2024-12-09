import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    global: {},
  },
  resolve: {
    // https://github.com/aws-amplify/amplify-js/issues/9639
    alias: {
      "./runtimeConfig": "./runtimeConfig.browser",
    },
  },
  build: {
    sourcemap: true,
    outDir: "dist",
    // sourcemap: true,
    commonjsOptions: {
      include: [/node_modules/],
      extensions: [".js", ".cjs"],
      strictRequires: true,
      // https://stackoverflow.com/questions/62770883/how-to-include-both-import-and-require-statements-in-the-bundle-using-rollup
      transformMixedEsModules: true,
    },
  },
});
