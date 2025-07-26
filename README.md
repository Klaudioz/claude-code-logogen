# claude-code-logogen

Generate beautiful gradient CLAUDE CODE logos in your terminal using filled block characters with the sunset color palette.

## ✨ Features

- 🎨 **Filled Block Characters**: Beautiful gradient logos using solid block characters
- 🌅 **Sunset Palette**: Fixed sunset gradient colors (`#ff9966`, `#ff5e62`, `#ffa34e`)
- 🔤 **Multi-line Support**: Create logos with multiple lines of text
- ⚡ **Zero Configuration**: Simple, single-purpose tool
- 📦 **Minimal Dependencies**: Lightweight with only essential dependencies

## 🚀 Quick Start

No installation needed! Try it right now:

```bash
# Generate CLAUDE CODE logo
npx claude-code-logogen "CLAUDE\nCODE"

# Any custom text
npx claude-code-logogen "HELLO WORLD"
```

## 📦 Installation

### Global Installation (CLI)
```bash
npm install -g claude-code-logogen
```

### Or Use Directly with npx
```bash
npx claude-code-logogen "Your Text"
```

### As a Library
```bash
npm install claude-code-logogen
```

## 🎯 Usage

### CLI Usage

```bash
claude-code-logogen "YOUR TEXT"
```

### Library Usage

```javascript
import { render, PALETTES } from 'claude-code-logogen';

// Render with default sunset palette
await render('HELLO WORLD');

// Using custom colors
await render('MY BRAND', {
  palette: ['#ff0000', '#00ff00', '#0000ff']
});

// TypeScript usage
import { render, RenderOptions } from 'claude-code-logogen';

const options: RenderOptions = {
  palette: ['#ff9966', '#ff5e62', '#ffa34e'] // Custom colors
};

await render('TYPESCRIPT', options);

// Access palette information
console.log('Sunset colors:', PALETTES.sunset);
```

### Arguments

- **`<text>`**: Text to display
  - Use `"\\n"` for newlines: `"LINE1\\nLINE2"`

## 💡 Examples

### Basic Usage

```bash
# Simple logo with sunset gradient
npx claude-code-logogen "STARTUP"

# Multi-line company logo
npx claude-code-logogen "MY\\nCOMPANY"

# Claude Code branding
npx claude-code-logogen "CLAUDE\\nCODE"
```

## 🎭 Use Cases

- **Project Banners**: Add eye-catching headers to your README files
- **Terminal Startup**: Display your company logo when opening terminals  
- **CI/CD Pipelines**: Make deployment logs more visually appealing
- **Development Tools**: Brand your CLI applications
- **Presentations**: Create stunning terminal demos
- **Personal Branding**: Add flair to your shell prompt or scripts

## 📚 Library API

### Core Functions

#### `render(text, options?)`
Renders filled block characters with sunset gradient.

```typescript
async function render(text: string, options?: RenderOptions): Promise<void>
```

- **text** (string): Text to display
- **options.palette** (string[]): Custom color array (optional, defaults to sunset)

Returns: `Promise<void>` - Renders directly to stdout

### Palette

- **`PALETTES.sunset`**: Array containing sunset color palette

### Type Definitions

```typescript
interface RenderOptions {
  palette?: string[];
}
```

## 🛠️ Development

Want to contribute or customize?

```bash
git clone https://github.com/klaudioz/claude-code-logogen.git
cd claude-code-logogen
npm install

# Development mode
npm run dev -- "TEST"

# Build
npm run build

# Test the built version
node dist/index.js "HELLO"
```

### 🧪 Testing

Run the test suite with Vitest:

```bash
# Run all tests in watch mode
npm run test

# Run tests once (CI mode)
npm run test:coverage

# Run tests with UI
npm run test:ui
```

The test suite includes:
- Unit tests for library functions
- CLI integration tests
- Color palette validation
- Error handling scenarios

Tests are located in `__tests__/` with the following structure:
- `cli.test.ts` - CLI command line behavior
- `lib.test.ts` - Library API functions
- `palettes.test.ts` - Color palette system
- `utils/` - Utility function tests

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT AND CC0-1.0

---

**Made with ❤️ for the terminal lovers**

*Transform your text into stunning CLAUDE CODE logos!*