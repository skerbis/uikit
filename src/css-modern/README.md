# UIKit Modern CSS

A modern, CSS-only version of UIKit featuring cutting-edge web technologies and minimal JavaScript requirements.

## Features

### 🎨 CSS Custom Properties (CSS Variables)
- No preprocessor compilation needed
- Runtime theming support
- Easy customization without rebuilding

### 🌙 Native Dark Mode Support
- Automatic dark mode using `prefers-color-scheme`
- Manual override with `.uk-dark` and `.uk-light` classes
- Smooth transitions between themes

### 📦 Container Queries
- Components respond to their container size, not viewport
- True component-based responsive design
- Works alongside traditional media queries

### 🔤 Fluid Typography with clamp()
- Smooth font scaling without breakpoints
- Better readability across all screen sizes
- Responsive headings using modern CSS functions

### 🎯 Native CSS Grid & Flexbox
- No preprocessor needed
- Auto-fit and auto-fill layouts
- Subgrid support for nested layouts

### 🎭 CSS-Only Icons
- Minimal JavaScript requirements
- Uses CSS masks for color flexibility
- Emoji fallbacks for universal support
- SVG data URIs embedded in CSS

### ♿ Modern Accessibility
- Focus-visible support
- Reduced motion preferences
- ARIA-friendly utilities
- Screen reader classes

### 🚀 Modern Browser APIs
- Native `aspect-ratio` property
- `gap` for Grid and Flexbox
- Container query units (cqi)
- Modern focus management

## Installation

### Option 1: Direct CSS Import

```html
<!-- Modern CSS only (no JavaScript required for basic features) -->
<link rel="stylesheet" href="path/to/uikit-modern.css">
```

### Option 2: Use alongside existing UIKit

```html
<!-- Traditional UIKit -->
<link rel="stylesheet" href="dist/css/uikit.min.css">
<script src="dist/js/uikit.min.js"></script>

<!-- Add modern features on top -->
<link rel="stylesheet" href="src/css-modern/uikit-modern.css">
```

## Quick Start

### Dark Mode Support

Automatic dark mode based on system preferences:

```html
<!-- Automatically switches based on system preference -->
<body>
  <h1>This respects system dark mode!</h1>
</body>
```

Manual control:

```html
<!-- Force dark mode -->
<body class="uk-dark">
  <h1>Always dark</h1>
</body>

<!-- Force light mode -->
<body class="uk-light">
  <h1>Always light</h1>
</body>
```

### Fluid Typography

```html
<!-- Heading scales from 32px to 42px smoothly -->
<h1 class="uk-h1-modern">Fluid Heading</h1>

<!-- Display heading scales from 48px to 96px -->
<h1 class="uk-heading-display-1">Hero Heading</h1>
```

### Container Queries

```html
<!-- Card that adapts to its container -->
<div class="uk-container-query" style="width: 600px;">
  <div class="uk-card-responsive">
    <div class="uk-card-media">...</div>
    <div class="uk-card-body">
      <h3>Card Title</h3>
      <p>Content adapts to container width, not viewport!</p>
    </div>
  </div>
</div>
```

### Responsive Grid (Auto-fit)

```html
<!-- Grid adjusts columns automatically based on available space -->
<div class="uk-grid-modern uk-grid-auto-fit">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
  <!-- Automatically creates as many columns as fit -->
</div>
```

### CSS-Only Icons

```html
<!-- CSS Mask icons (color via currentColor) -->
<span class="uk-icon-mask uk-icon-check"></span>

<!-- Emoji icons (no JS, works everywhere) -->
<span class="uk-icon-emoji" data-icon="heart"></span>

<!-- Animated spinner (pure CSS) -->
<span class="uk-icon-spinner"></span>
```

## Browser Support

Modern browsers with support for:
- CSS Custom Properties
- CSS Grid
- Flexbox gap
- Container Queries
- clamp()
- prefers-color-scheme

Recommended: Chrome 105+, Firefox 110+, Safari 16+, Edge 105+

## File Structure

```
src/css-modern/
├── variables.css           # CSS custom properties, colors, spacing
├── grid.css               # CSS Grid utilities
├── flex.css               # Flexbox utilities
├── container-queries.css  # Container query utilities
├── typography.css         # Fluid typography with clamp()
├── icons.css             # CSS-only icon system
├── utilities.css         # Common utility classes
└── uikit-modern.css      # Main entry point (imports all)
```

## Customization

Override CSS variables in your own stylesheet:

```css
:root {
  /* Custom brand colors */
  --uk-color-primary: #6366f1;
  --uk-color-primary-hover: #4f46e5;
  
  /* Custom spacing */
  --uk-space-default: 1.5rem;
  
  /* Custom fonts */
  --uk-font-family: 'Inter', system-ui, sans-serif;
}
```

## Migration from Traditional UIKit

This version is **fully compatible** with existing UIKit markup. You can:

1. Use it alongside the traditional UIKit
2. Gradually migrate components
3. Mix traditional and modern classes

Example:

```html
<!-- Traditional UIKit classes work -->
<div class="uk-card uk-card-default">
  <!-- Add modern utilities -->
  <div class="uk-card-body uk-flex-modern uk-flex-gap">
    <div class="uk-flex-1">Content</div>
  </div>
</div>
```

## Performance

- **No build step required** for development
- **No JavaScript** for most features
- **Smaller bundle size** - CSS only, no JS for layout
- **Better runtime performance** - native CSS features

## Components

### Fully CSS-only (no JS required)
- Grid layouts
- Flexbox layouts
- Typography
- Spacing utilities
- Color system
- Borders and shadows
- Static icons

### Minimal JS required
- Animated icons
- Interactive components (dropdowns, modals, etc. - use UIKit JS)

## Examples

See the `examples/` directory for full working examples:
- Dark mode demo
- Container queries demo
- Fluid typography showcase
- Grid and Flexbox layouts
- Icon system examples

## Contributing

Contributions are welcome! Please ensure:
- No preprocessor dependencies (pure CSS only)
- Modern CSS features only
- Browser compatibility documented
- Accessibility considered

## License

MIT License - same as UIKit

## Credits

Modern CSS features based on:
- UIKit Framework by YOOtheme
- Modern CSS standards (W3C)
- Community feedback and best practices
