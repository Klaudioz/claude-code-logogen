#!/usr/bin/env node

import { render } from './lib.js';
import { InputError } from './utils/errors.js';

async function main() {
  try {
    const args = process.argv.slice(2);
    
    if (args.length === 0) {
      throw new InputError('Text is required. Usage: claude-code-logogen "YOUR TEXT"');
    }

    let inputText = args[0];

    if (!inputText || inputText.trim() === '') {
      throw new InputError('Text must not be empty');
    }

    inputText = inputText.replace(/\\n/g, '\n');

    await render(inputText);
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Error: ${error.message}`);
    } else {
      console.error('An unexpected error occurred');
    }
    process.exit(1);
  }
}

main();
