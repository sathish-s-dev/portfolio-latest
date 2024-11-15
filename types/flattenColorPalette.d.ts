declare module "tailwindcss/lib/util/flattenColorPalette" {
  // Add the type definition for the flattenColorPalette function
  const flattenColorPalette: (colors: any) => Record<string, string>;
  export default flattenColorPalette;
}
