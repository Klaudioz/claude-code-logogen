import { renderInkLogo } from './InkRenderer.js';
import {
  PALETTES,
  type PaletteName,
  resolvePalette,
} from './palettes.js';

export const DEFAULT_PALETTE: PaletteName = 'sunset';

export interface RenderOptions {
  palette?: PaletteName | string[] | string;
}

export function resolveColors(
  palette: PaletteName | string[] | string
): string[] {
  if (Array.isArray(palette)) {
    return palette;
  }

  const colors = resolvePalette(palette);
  if (!colors) {
    throw new Error(`Unknown palette: ${palette}`);
  }

  return colors;
}

export async function render(
  text: string,
  options: RenderOptions = {}
): Promise<void> {
  const { palette = DEFAULT_PALETTE } = options;
  const paletteColors = resolveColors(palette);
  return renderInkLogo(text, paletteColors);
}

export {
  PALETTES,
  type PaletteName,
  resolvePalette,
};
