# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Common Commands

### Development
- `npm run dev -- "TEXT"` - Run in development mode with tsx
- `npm run build` - Build TypeScript to JavaScript in `dist/`
- `npm run start` - Run with ts-node (ESM mode)

### Testing
- `npm test` - Run all tests with Vitest
- `npm run test:ui` - Run tests with interactive UI
- `npm run test:coverage` - Run tests with coverage report

### Testing the CLI
```bash
# Test basic functionality
node dist/index.js "CLAUDE\nCODE"

# Test with built CLI
npx claude-code-logogen "HELLO WORLD"
```

## Architecture Overview

This is a simplified CLI tool that generates gradient CLAUDE CODE logos using filled block characters with the sunset color palette.

### Core Components

**`src/index.ts`**: Minimal CLI entry point. Takes text input and renders using sunset palette with filled characters.

**`src/lib.ts`**: Library API entry point. Exports simplified `render()` function for programmatic use.

**`src/palettes.ts`**: Contains only the sunset color palette: `['#ff9966', '#ff5e62', '#ffa34e']`.

**`src/InkRenderer.tsx`**: React component using `ink`, `ink-big-text`, and `ink-gradient` for filled block character rendering.

**`src/utils/errors.ts`**: Custom error class (`InputError`) for error handling.

## Key Implementation Details

### Simplified Rendering
- Only supports filled block characters using React + Ink
- Fixed sunset color palette
- Multi-line text support with `\n`
- No CLI options or configuration

### Color Palette System
Single sunset palette defined as:
```typescript
'sunset': ['#ff9966', '#ff5e62', '#ffa34e']
```

### ESM + TypeScript Setup
- Uses `"type": "module"` with ESM imports
- TypeScript with `"jsx": "react-jsx"` for TSX support
- `"moduleResolution": "bundler"` to handle ink dependencies
- Builds to `dist/` with declarations and sourcemaps

### Ink Rendering Process
The Ink renderer uses React components and automatically unmounts after 100ms to allow the process to exit cleanly.

## Usage

### CLI Tool
```bash
# Generate CLAUDE CODE logo
npx claude-code-logogen "CLAUDE\nCODE"

# Any custom text
npx claude-code-logogen "HELLO WORLD"
```

### Programmatic Library
```typescript
import { render } from 'claude-code-logogen';

// Render with sunset palette (only option)
await render('HELLO WORLD');

// With custom colors
await render('AWESOME', { palette: ['#ff0000', '#00ff00', '#0000ff'] });
```

### Package.json Configuration
- **`main`**: Points to `dist/lib.js` (library entry)
- **`bin`**: Points to `dist/index.js` (CLI entry)  
- **`exports`**: Defines entry points for different usage patterns

## Testing Strategy

The project uses **Vitest** for testing:

### Test Structure
```
__tests__/
├── cli.test.ts           # CLI functionality
├── lib.test.ts           # Library API functions
├── palettes.test.ts      # Sunset palette system
└── utils/
    └── errors.test.ts    # Custom error classes
```

### Running Tests
- Development: `npm test` (watch mode)
- CI/Coverage: `npm run test:coverage`
- Interactive: `npm run test:ui`