# UIKit Modern - Modular CSS Framework

## Cherry-Picking Components

UIKit Modern is designed to be fully modular. Import only the components you need.

### Quick Start - Full Build

```html
<link rel="stylesheet" href="dist/css/uikit-modern.min.css">
```

### Cherry-Picking - Custom Build

Create your own custom CSS file:

```css
/* custom-uikit.css */

/* Core - Always required */
@import "uikit/src/css-modern/variables.css";

/* Layout - Choose what you need */
@import "uikit/src/css-modern/grid.css";
@import "uikit/src/css-modern/flex.css";

/* Typography - Optional */
@import "uikit/src/css-modern/typography.css";

/* Components - Pick only what you use */
@import "uikit/src/css-modern/components/button.css";
@import "uikit/src/css-modern/components/card.css";
@import "uikit/src/css-modern/components/form.css";

/* Icons - Optional */
@import "uikit/src/css-modern/icons.css";

/* Utilities - Optional */
@import "uikit/src/css-modern/utilities.css";
```

Then build your custom CSS:

```bash
# Using a CSS bundler
npm run build-custom

# Or use postcss directly
npx postcss custom-uikit.css -o dist/custom-uikit.css
```

## Available Modules

### Core (Required)
- `variables.css` - CSS custom properties (always needed)

### Layout Systems
- `grid.css` - CSS Grid utilities (250 lines)
- `flex.css` - Flexbox utilities (280 lines)
- `container-queries.css` - Container query support (190 lines)

### Typography
- `typography.css` - Fluid typography with clamp() (310 lines)

### Components
- `components/button.css` - Button styles
- `components/card.css` - Card component
- `components/form.css` - Form controls

### Icons
- `icons.css` - CSS-only icon system (355 lines)

### Utilities
- `utilities.css` - Common utility classes (370 lines)

## File Sizes

| Module | Size (unminified) | Size (minified) |
|--------|-------------------|-----------------|
| Full build | 56 KB | 35 KB |
| Core only (variables) | 8 KB | 5 KB |
| Grid + Flex | 15 KB | 10 KB |
| Typography | 9 KB | 6 KB |
| All components | 8 KB | 5 KB |

## Examples

### Minimal Setup (Variables + Grid only)
```css
@import "variables.css";
@import "grid.css";
```
Result: ~10 KB unminified

### Layout-focused Setup
```css
@import "variables.css";
@import "grid.css";
@import "flex.css";
@import "container-queries.css";
@import "utilities.css";
```
Result: ~35 KB unminified

### Component-focused Setup
```css
@import "variables.css";
@import "typography.css";
@import "components/button.css";
@import "components/card.css";
@import "components/form.css";
@import "utilities.css";
```
Result: ~30 KB unminified

## NPM/Build Tool Integration

### Using npm/webpack/vite

```javascript
// main.js
import 'uikit/src/css-modern/variables.css';
import 'uikit/src/css-modern/grid.css';
import 'uikit/src/css-modern/components/button.css';
```

### Using PostCSS

```javascript
// postcss.config.js
module.exports = {
  plugins: {
    'postcss-import': {},
    'cssnano': {}
  }
}
```

Then create your custom build:

```css
/* custom.css */
@import "uikit/src/css-modern/variables.css";
@import "uikit/src/css-modern/grid.css";
```

Build:
```bash
npx postcss custom.css -o dist/custom.min.css
```

## CDN Usage

Individual modules are not available via CDN. For CDN usage, use the full build:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@latest/dist/css/uikit-modern.min.css">
```

## Browser Support

All modules require:
- CSS Custom Properties
- Modern CSS features (Grid, Flexbox gap, clamp, etc.)

Chrome 105+, Firefox 110+, Safari 16+, Edge 105+
