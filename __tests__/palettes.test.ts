import { describe, it, expect } from 'vitest';
import {
  PALETTES,
  resolvePalette,
  type PaletteName,
} from '../src/palettes.js';

describe('palettes', () => {
  describe('PALETTES', () => {
    it('should contain only sunset palette', () => {
      const expectedPalettes = ['sunset'];

      expect(Object.keys(PALETTES)).toEqual(expectedPalettes);
    });

    it('should have valid hex colors for each palette', () => {
      Object.entries(PALETTES).forEach(([name, colors]) => {
        expect(colors.length).toBeGreaterThan(0);
        colors.forEach((color) => {
          expect(color).toMatch(/^#[0-9a-fA-F]{6}$/);
        });
      });
    });
  });

  describe('resolvePalette', () => {
    it('should return colors for valid palette name', () => {
      const colors = resolvePalette('sunset');
      expect(colors).toEqual(['#ff9966', '#ff5e62', '#ffa34e']);
    });

    it('should return null for invalid palette name', () => {
      const colors = resolvePalette('invalid-palette');
      expect(colors).toBeNull();
    });

    it('should return a copy of the palette array', () => {
      const colors = resolvePalette('sunset');
      expect(colors).not.toBe(PALETTES.sunset);
      expect(colors).toEqual(PALETTES.sunset);
    });

    it('should handle sunset palette correctly', () => {
      const colors = resolvePalette('sunset');
      expect(colors).toEqual([...PALETTES.sunset]);
    });
  });
});
