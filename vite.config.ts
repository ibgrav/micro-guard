import { defineConfig } from "vite";

const fileNames = (ext: string) => ({
  entryFileNames: `[name].${ext}`,
  chunkFileNames: `[name].${ext}`,
});

export default defineConfig({
  build: {
    minify: true,
    modulePreload: false,
    reportCompressedSize: false,
    rollupOptions: {
      input: "src/index.ts",
      preserveEntrySignatures: "strict",
      output: [
        {
          dir: "dist/umd",
          format: "umd",
          name: "MicroGuard",
          ...fileNames("js"),
        },
        {
          dir: "dist/esm",
          format: "esm",
          preserveModules: true,
          preserveModulesRoot: "src",
          ...fileNames("mjs"),
        },
      ],
    },
  },
});
