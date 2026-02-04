# UIKit Modern Web Features

This document describes the modern web features added to UIKit in this update.

## Overview

UIKit has been enhanced with modern CSS capabilities while maintaining full backward compatibility. All existing UIKit markup continues to work, with new features added on top.

## Key Features

### 1. CSS Custom Properties (CSS Variables)

**Location:** `src/css-modern/variables.css`

Replace preprocessor variables with CSS custom properties that can be changed at runtime:

```css
:root {
  --uk-color-primary: #2563eb;
  --uk-font-size-base: clamp(14px, 1vw + 12px, 16px);
}
```

**Benefits:**
- No build step required
- Runtime theming support
- Easy customization in browser DevTools
- Reduced CSS bundle size

### 2. Dark Mode Support

**Implementation:** Automatic via `prefers-color-scheme` + manual overrides

```html
<!-- Automatic: respects system preference -->
<body class="uk-modern"></body>

<!-- Manual dark mode -->
<body class="uk-dark"></body>

<!-- Manual light mode -->
<body class="uk-light"></body>
```

**Features:**
- Automatic color adjustments for text, backgrounds, borders
- Optimized shadow opacity for dark mode
- Accessible contrast ratios maintained

### 3. Container Queries

**Location:** `src/css-modern/container-queries.css`

Components respond to their container size instead of viewport:

```html
<div class="uk-container-query">
  <div class="uk-card-responsive">
    <!-- Layout adapts based on container width, not viewport -->
  </div>
</div>
```

**Use Cases:**
- Responsive cards in sidebars
- Component libraries
- Dashboard layouts
- Reusable components

### 4. Fluid Typography with clamp()

**Location:** `src/css-modern/typography.css`

Smooth font scaling without breakpoints:

```css
--uk-font-size-2xlarge: clamp(2rem, 3vw + 1rem, 2.625rem);
```

**Benefits:**
- Smooth scaling across all screen sizes
- No breakpoint maintenance
- Better readability
- Reduced CSS complexity

### 5. Native CSS Grid

**Location:** `src/css-modern/grid.css`

Modern grid layouts without preprocessors:

```html
<!-- Auto-fit: responsive without media queries -->
<div class="uk-grid-modern uk-grid-auto-fit">
  <div>Item</div>
  <div>Item</div>
  <!-- Automatically adjusts columns -->
</div>

<!-- Explicit columns -->
<div class="uk-grid-modern uk-grid-3">
  <div>1</div>
  <div>2</div>
  <div>3</div>
</div>
```

**Features:**
- Auto-fit and auto-fill
- Native gap support
- Subgrid support
- Named grid areas
- Responsive modifiers

### 6. Modern Flexbox

**Location:** `src/css-modern/flex.css`

Enhanced flexbox with native gap:

```html
<div class="uk-flex-modern uk-flex-gap uk-flex-wrap">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>
```

**Features:**
- Native gap property (no negative margins)
- All flex properties as utilities
- Responsive direction changes
- Common layout patterns

### 7. CSS-Only Icons

**Location:** `src/css-modern/icons.css`

Three approaches to minimize JavaScript:

```html
<!-- CSS Mask Icons (customizable color) -->
<span class="uk-icon-mask uk-icon-check"></span>

<!-- Emoji Icons (universal support, no JS) -->
<span class="uk-icon-emoji" data-icon="heart"></span>

<!-- Animated CSS Icons -->
<span class="uk-icon-spinner"></span>
```

**Benefits:**
- No external icon fonts
- Color customizable via currentColor
- Animated icons with pure CSS
- Accessible with ARIA labels

### 8. Modern Browser APIs

The modern CSS leverages:

- `aspect-ratio` for media elements
- `gap` for Grid and Flexbox
- `clamp()` for fluid sizing
- Container query units (`cqi`)
- `:focus-visible` for better focus states
- `@supports` for progressive enhancement
- `prefers-reduced-motion` for accessibility

## File Structure

```
src/css-modern/
├── variables.css           # CSS custom properties
├── grid.css               # CSS Grid utilities
├── flex.css               # Flexbox utilities  
├── container-queries.css  # Container query utilities
├── typography.css         # Fluid typography
├── icons.css             # CSS-only icons
├── utilities.css         # Common utilities
├── uikit-modern.css      # Main entry point
└── README.md             # Documentation

build/
└── modern.js             # Build script

dist/css/
├── uikit-modern.css      # Compiled (unminified)
└── uikit-modern.min.css  # Compiled (minified)

examples/
└── modern-demo.html      # Interactive demo
```

## Building

```bash
# Build modern CSS
npm run build-modern

# Traditional UIKit build
npm run compile

# Both
npm run compile && npm run build-modern
```

## Browser Support

Requires modern browsers with:
- CSS Custom Properties
- CSS Grid
- Flexbox gap
- Container Queries (latest browsers)
- clamp()
- prefers-color-scheme

**Recommended:** Chrome 105+, Firefox 110+, Safari 16+, Edge 105+

**Progressive Enhancement:** Older browsers will gracefully degrade to simpler layouts.

## Migration Guide

### Using Alongside Traditional UIKit

```html
<!-- Traditional UIKit -->
<link rel="stylesheet" href="dist/css/uikit.min.css">
<script src="dist/js/uikit.min.js"></script>

<!-- Add modern features -->
<link rel="stylesheet" href="dist/css/uikit-modern.min.css">
```

### Replacing Traditional UIKit

```html
<!-- Modern CSS only (no JS for layout) -->
<link rel="stylesheet" href="dist/css/uikit-modern.min.css">

<!-- Optional: UIKit JS only if you need interactive components -->
<script src="dist/js/uikit.min.js"></script>
```

### Customization

Override CSS variables in your stylesheet:

```css
:root {
  /* Brand colors */
  --uk-color-primary: #6366f1;
  --uk-color-primary-hover: #4f46e5;
  
  /* Typography */
  --uk-font-family: 'Inter', system-ui, sans-serif;
  --uk-font-size-base: clamp(15px, 1.2vw + 12px, 17px);
  
  /* Spacing */
  --uk-space-default: 1.5rem;
}

/* Dark mode customization */
.uk-dark {
  --uk-color-primary: #818cf8;
}
```

## Performance Benefits

1. **Smaller Bundle Size:** CSS-only features don't require JavaScript
2. **No Build Step:** Direct CSS can be used in development
3. **Better Caching:** Separate modern CSS can be cached independently
4. **Runtime Performance:** Native CSS features are faster than JS polyfills

## Accessibility

Modern CSS includes:

- `:focus-visible` for keyboard navigation
- `prefers-reduced-motion` support
- Screen reader utilities
- Semantic color system
- High contrast support in dark mode

## Examples

See `examples/modern-demo.html` for a complete interactive demonstration of all features.

## Future Enhancements

Potential additions:

- CSS Scroll Snap for carousels
- CSS Scroll Timeline animations
- View Transitions API
- CSS Nesting when widely supported
- More container query patterns
- Logical properties for better RTL support

## Credits

- UIKit Framework by YOOtheme
- Modern CSS standards by W3C
- Community feedback and contributions

## License

MIT License (same as UIKit)
