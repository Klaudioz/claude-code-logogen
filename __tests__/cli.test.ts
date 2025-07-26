import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const cliPath = join(__dirname, '..', 'src', 'index.ts');

describe('CLI', () => {
  describe('text argument', () => {
    it('should require text argument', () => {
      try {
        execSync(`npx tsx ${cliPath}`, { encoding: 'utf-8', stdio: 'pipe' });
        // Should not reach here
        expect(true).toBe(false);
      } catch (error: any) {
        // Should fail with appropriate error
        expect(error.stderr || error.message).toMatch(
          /text is required/i
        );
      }
    });

    it('should accept text argument and render filled logo', () => {
      try {
        const output = execSync(`npx tsx ${cliPath} "TEST"`, {
          encoding: 'utf-8',
          timeout: 5000,
        });
        // The output should contain filled characters (block characters)
        expect(output.length).toBeGreaterThan(0);
        // Filled rendering uses block characters, not traditional ASCII art
        expect(output).toMatch(/[█▀▄▌▐]/); // Block characters
      } catch (error: any) {
        // If it fails, log the error for debugging
        console.error('Error running CLI with text:', error.message);
        throw error;
      }
    });

    it('should handle newlines in text', () => {
      try {
        const output = execSync(`npx tsx ${cliPath} "HELLO\\nWORLD"`, {
          encoding: 'utf-8',
          timeout: 5000,
        });
        expect(output.length).toBeGreaterThan(0);
        expect(output).toMatch(/[█▀▄▌▐]/); // Block characters
      } catch (error: any) {
        console.error('Error running CLI with newlines:', error.message);
        throw error;
      }
    });
  });
});
