import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    // your paths
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        aurora: "aurora 60s linear infinite",
        shimmer: "shimmer 2s linear infinite",
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },

      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
        shimmer: {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        orbit: {
          "0%": {
            transform:
              "rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))",
          },
          "100%": {
            transform:
              "rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};

export default config;

// This plugin adds each Tailwind color as a global CSS variable, e.g., var(--gray-200).
function addVariablesForColors({
  addBase,
  theme,
}: {
  addBase: any;
  theme: any;
}) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
