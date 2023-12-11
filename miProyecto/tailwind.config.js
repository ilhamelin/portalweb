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
        grisCustom2: "#808290",
        grisOscuroCustom: "#636674",
        grisOscuroV2custom: "#9A9CAE",
        grisCustom3: "#1C1D22",
        grisCustom4: "15171C",
        rosadoCustom: "#E42855",
        VerdeCustom: "#00A261",
        VerdeCustom2: "#00A761",
        AmarilloCustom: "#C59A00",
        RojoCustom: "#E42855",
        Azul: "#006AE6",
        AzulOscuro: "#172331",
        RosaIntenso: "#E42855",
        RosaCoral: "#EA868F",

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
  },
  plugins: [],
};
