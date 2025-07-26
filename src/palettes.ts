export const PALETTES = {
  sunset: ['#ff9966', '#ff5e62', '#ffa34e'],
} as const;

export type PaletteName = keyof typeof PALETTES;

export function resolvePalette(name: string): string[] | null {
  const paletteName = name as PaletteName;
  const palette = PALETTES[paletteName];
  return palette ? [...palette] : null;
}

