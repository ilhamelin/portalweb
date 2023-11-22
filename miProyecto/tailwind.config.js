/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ee674d",
        lavenderRose: "#f77fee",
        lavander: "#D36ce1",
        sunsetOrange: "#F94350",
        portGore: "#212160",
        remy: "#Fddefd",
        valhalla: "#2b1546",
        verdeAgua: "#03BB85",
        RojoColonial: "#803F37",
        burdeo: "#641c34",
        Maroon: "#800000",
        light: "#343A40",
        grisCustom: "#B5B5C8",
        grisOscuroCustom: "#636674",
        grisOscuroV2custom: "#9A9CAE",
        rosadoCustom: "#E42855",
        secondary: {
          100: "#1E1F25",
          900: "#131517",
        },
      },
      keyframes: {
        fadeIn: { from: { opacity: 0, transform: "scale(.95)" } },
        fadeOut: { to: { opacity: 0, transform: "scale(.95)" } },
      },
      animation: {
        fadeIn: "fadeIn 0.1s ease-out",
        fadeOut: "fadeOut 0.15s ease-out forwards",
      },
    },
    fontFamily: {
      sans: ["inter", "Helvetica", "sans-serif"],
    },
    fontSize: {
      inter: ["13.975px"],
      inter2: ["17.55px"],
      inter3: ["13px"],
      fs6: ["16px"],
      "text-xs": ["0.75rem"],
      sm: "0.8rem",
      base: "1rem",
      xl: "1.25rem",
      "2xl": "1.563rem",
      "3xl": "1.953rem",
      "4xl": "2.441rem",
      "5xl": "3.052rem",
      lg: ["20px", "28px"],
      base: ["16px", "24px"],
    },
  },
  plugins: [],
};
