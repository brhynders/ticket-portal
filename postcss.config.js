import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

const config = {
  content: ["./src/**/*.{svelte,html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default {
  plugins: [tailwindcss(config), autoprefixer()],
};
