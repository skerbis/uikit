[![uikit banner](https://cloud.githubusercontent.com/assets/321047/21769911/474d7d9e-d681-11e6-9fe0-d95f8ccfd3a9.jpg)](https://getuikit.com/)

# UIkit Modern

[![Discord](https://img.shields.io/badge/chat-on%20discord-7289da.svg)](https://discord.gg/NEt4Pv7)
[![jsdelivr](https://data.jsdelivr.com/v1/package/npm/uikit/badge?style=rounded)](https://www.jsdelivr.com/package/npm/uikit)

**A modern, CSS-only framework** for developing fast and powerful web interfaces.

UIkit has been completely rebuilt using modern CSS features - no LESS or SCSS preprocessors required!

## ✨ Key Features

- **🎨 CSS Custom Properties** - Runtime theming without rebuilds
- **🌙 Dark Mode** - Automatic with `prefers-color-scheme`
- **📦 Container Queries** - Component-responsive design
- **📝 Fluid Typography** - `clamp()` for breakpoint-less scaling
- **🎯 Native Grid & Flexbox** - Modern layouts with `gap`
- **🎭 CSS-Only Icons** - Minimal JavaScript requirements
- **🧩 Modular** - Cherry-pick only what you need
- **⚡ Zero Preprocessors** - Pure CSS, no build tools needed

[Learn more about modern features →](MODERN_FEATURES.md)

## 🚀 Quick Start

### Via CDN

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@latest/dist/css/uikit-modern.min.css">
```

### Via NPM

```bash
npm install uikit
```

```html
<link rel="stylesheet" href="node_modules/uikit/dist/css/uikit-modern.min.css">
```

### Cherry-Picking Components

Import only what you need for optimal performance:

```css
/* Custom build */
@import "uikit/src/css-modern/variables.css";
@import "uikit/src/css-modern/grid.css";
@import "uikit/src/css-modern/components/button.css";
```

[Complete cherry-picking guide →](src/css-modern/CHERRY_PICKING.md)

## 📦 Build from Source

```bash
# Clone the repository
git clone https://github.com/skerbis/uikit.git
cd uikit

# Install dependencies
npm install

# Build CSS
npm run build

# Output: dist/css/uikit-modern.css (64 KB) and uikit-modern.min.css (41 KB)
```

---

<p align="center">
  <b>UIkit is an Open Source project developed by YOOtheme.</b>
  <br><br>
  <a href="https://yootheme.com" align="center">
      <img width="134" height="30" src="https://yootheme.com/site/images/yootheme-logo.svg" alt="YOOtheme">
  </a>
</p>

---

## 📚 Documentation

- [Modern Features Guide](MODERN_FEATURES.md) - Complete feature documentation
- [Cherry-Picking Guide](src/css-modern/CHERRY_PICKING.md) - Modular import system
- [Implementation Summary](IMPLEMENTATION_SUMMARY.md) - Technical details
- [Examples](examples/) - Interactive demos

## 🌐 Resources

* [Homepage](https://getuikit.com) - Learn more about UIkit
* [@getuikit](https://twitter.com/getuikit) - Get the latest buzz on Twitter
* [Discord Chat](https://discord.gg/NEt4Pv7) - Join our developer chat

## 🤝 Contributing

Finding bugs, sending pull requests or improving our docs - any contribution is welcome and highly appreciated. To get started, head over to our [contribution guidelines](CONTRIBUTING.md). Thanks!

## Versioning

UIkit is maintained by using the [Semantic Versioning Specification (SemVer)](https://semver.org).

## Browser Support

| ![Firefox](https://raw.github.com/alrra/browser-logos/main/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/main/src/safari/safari_48x48.png) | ![Chrome](https://raw.github.com/alrra/browser-logos/main/src/chrome/chrome_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/main/src/edge/edge_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/main/src/opera/opera_48x48.png) |
|-------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------|----------------------------------------------------------------------------------|-------------------------------------------------------------------------------------|
| Latest ✔                                                                                  | Latest ✔                                                                               | Latest ✔                                                                               | Latest ✔                                                                         | Latest ✔                                                                            |

Tested With<br>[![BrowserStack](https://user-images.githubusercontent.com/355427/27389060-9f716c82-569d-11e7-923c-bd5fe7f1c55a.png)](https://www.browserstack.com)

## Copyright and License

Copyright [YOOtheme](https://yootheme.com) GmbH under the [MIT license](LICENSE.md).
