import { svelte } from "@sveltejs/vite-plugin-svelte";
import path from "path";

export default {
  plugins: [svelte()],
  resolve: {
    alias: {
      $lib: path.resolve("src", "lib"),
    },
  },
};
