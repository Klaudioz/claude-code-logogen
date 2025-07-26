import { describe, it, expect, vi } from 'vitest';
import {
  render,
  resolveColors,
  DEFAULT_PALETTE,
  type RenderOptions,
} from '../src/lib.js';

// Mock the dependencies
vi.mock('../src/InkRenderer.js', () => ({
  renderInkLogo: vi.fn().mockResolvedValue(undefined),
}));

vi.mock('../src/palettes.js', async () => {
  const actual = await vi.importActual('../src/palettes.js');
  return {
    ...actual,
    resolvePalette: vi.fn().mockImplementation((name: string) => {
      const palettes: Record<string, string[] | null> = {
        sunset: ['#ff9966', '#ff5e62', '#ffa34e'],
        invalid: null,
      };
      return palettes[name] || null;
    }),
  };
});

import { renderInkLogo } from '../src/InkRenderer.js';

describe('lib', () => {
  describe('constants', () => {
    it('should have correct default values', () => {
      expect(DEFAULT_PALETTE).toBe('sunset');
    });
  });

  describe('resolveColors', () => {
    it('should return array as-is when palette is already an array', () => {
      const customColors = ['#ff0000', '#00ff00', '#0000ff'];
      const result = resolveColors(customColors);
      expect(result).toBe(customColors);
    });

    it('should resolve valid palette names', () => {
      const result = resolveColors('sunset');
      expect(result).toEqual(['#ff9966', '#ff5e62', '#ffa34e']);
    });

    it('should resolve sunset palette', () => {
      const result = resolveColors('sunset');
      expect(result).toEqual(['#ff9966', '#ff5e62', '#ffa34e']);
    });

    it('should throw error for invalid palette names', () => {
      expect(() => resolveColors('invalid-palette')).toThrow(
        'Unknown palette: invalid-palette'
      );
    });

    it('should handle empty string palette name', () => {
      expect(() => resolveColors('')).toThrow('Unknown palette:');
    });
  });

  describe('render', () => {
    it('should call renderInkLogo with default sunset palette', async () => {
      await render('TEST');

      expect(renderInkLogo).toHaveBeenCalledWith(
        'TEST',
        ['#ff9966', '#ff5e62', '#ffa34e']
      );
    });

    it('should call renderInkLogo with custom palette', async () => {
      const options: RenderOptions = {
        palette: 'sunset',
      };

      await render('CUSTOM', options);

      expect(renderInkLogo).toHaveBeenCalledWith(
        'CUSTOM',
        ['#ff9966', '#ff5e62', '#ffa34e']
      );
    });

    it('should handle custom color arrays', async () => {
      const customColors = ['#ff0000', '#00ff00'];
      const options: RenderOptions = {
        palette: customColors,
      };

      await render('COLORS', options);

      expect(renderInkLogo).toHaveBeenCalledWith('COLORS', customColors);
    });

    it('should return void', async () => {
      const result = await render('TEST');
      expect(result).toBeUndefined();
    });
  });

  describe('error handling', () => {
    it('should handle errors from renderInkLogo', async () => {
      vi.mocked(renderInkLogo).mockRejectedValueOnce(new Error('Ink error'));

      await expect(render('TEST')).rejects.toThrow('Ink error');
    });
  });
});
