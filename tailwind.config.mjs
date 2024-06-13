/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-to-r": "linear-gradient(to right, var(--tw-gradient-stops))",
      },
      backgroundSize: {
        "200%": "200%",
      },
      backgroundPosition: {
        "0%": "0%",
        "100%": "100%",
      },
    },
  },
  plugins: [],
};
