import fs from 'fs-extra';
import path from 'path';
import { fileURLToPath } from 'url';
import CleanCSS from 'clean-css';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const srcDir = path.join(__dirname, '../src/css-modern');
const distDir = path.join(__dirname, '../dist/css');

// Files in order of import
const files = [
    'variables.css',
    'grid.css',
    'flex.css',
    'container-queries.css',
    'typography.css',
    'icons.css',
    'utilities.css',
];

// Banner comment
const banner = `/*!
 * UIKit Modern CSS ${new Date().getFullYear()}
 * https://github.com/uikit/uikit
 * 
 * Modern CSS-only version featuring:
 * - CSS Custom Properties (no preprocessor)
 * - Native Grid & Flexbox
 * - Container Queries
 * - Fluid Typography with clamp()
 * - Dark mode (prefers-color-scheme)
 * - Minimal JavaScript requirements
 * 
 * @license MIT
 */

`;

async function build() {
    console.log('Building UIKit Modern CSS...');
    
    // Ensure dist directory exists
    await fs.ensureDir(distDir);
    
    // Read and concatenate all CSS files
    let cssContent = '';
    
    for (const file of files) {
        const filePath = path.join(srcDir, file);
        const content = await fs.readFile(filePath, 'utf8');
        
        // Remove @import statements since we're concatenating
        const cleanContent = content.replace(/@import\s+["'][^"']+["'];?\n?/g, '');
        
        cssContent += `\n/* ========================================\n`;
        cssContent += ` * ${file}\n`;
        cssContent += ` * ======================================== */\n\n`;
        cssContent += cleanContent;
        cssContent += '\n';
    }
    
    // Add banner
    const fullCss = banner + cssContent;
    
    // Write unminified version
    const outputPath = path.join(distDir, 'uikit-modern.css');
    await fs.writeFile(outputPath, fullCss);
    console.log(`✓ Created ${outputPath}`);
    
    // Minify and write minified version
    const minified = new CleanCSS({
        level: 2,
        sourceMap: false,
    }).minify(fullCss);
    
    if (minified.errors.length > 0) {
        console.error('Minification errors:', minified.errors);
    }
    
    if (minified.warnings.length > 0) {
        console.warn('Minification warnings:', minified.warnings);
    }
    
    const minPath = path.join(distDir, 'uikit-modern.min.css');
    await fs.writeFile(minPath, banner + minified.styles);
    console.log(`✓ Created ${minPath}`);
    
    console.log('\nBuild complete!');
    console.log(`  Unminified: ${(fullCss.length / 1024).toFixed(2)} KB`);
    console.log(`  Minified: ${(minified.styles.length / 1024).toFixed(2)} KB`);
    console.log(`  Savings: ${(((fullCss.length - minified.styles.length) / fullCss.length) * 100).toFixed(1)}%`);
}

// Run build
build().catch((error) => {
    console.error('Build failed:', error);
    process.exit(1);
});
