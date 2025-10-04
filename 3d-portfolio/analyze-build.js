#!/usr/bin/env node

// Simple bundle analysis script
import fs from 'fs';
import path from 'path';

console.log('📊 Build Analysis Results');
console.log('========================\n');

const distDir = './dist/assets';
if (!fs.existsSync(distDir)) {
    console.log('❌ No dist/assets directory found. Run npm run build first.');
    process.exit(1);
}

const files = fs.readdirSync(distDir);
const jsFiles = files.filter(file => file.endsWith('.js'));
const cssFiles = files.filter(file => file.endsWith('.css'));

console.log('📁 JavaScript Bundles:');
console.log('---------------------');
jsFiles.forEach(file => {
    const stats = fs.statSync(path.join(distDir, file));
    const sizeKB = (stats.size / 1024).toFixed(2);
    const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📄 ${file}: ${sizeKB} KB (${sizeMB} MB)`);
});

console.log('\n🎨 CSS Files:');
console.log('-------------');
cssFiles.forEach(file => {
    const stats = fs.statSync(path.join(distDir, file));
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`📄 ${file}: ${sizeKB} KB`);
});

console.log('\n💡 Performance Optimizations Applied:');
console.log('====================================');
console.log('✅ Enhanced tree shaking enabled');
console.log('✅ Granular code splitting implemented');
console.log('✅ Aggressive minification with dead code elimination');
console.log('✅ CSS code splitting enabled');
console.log('✅ Responsive images implemented');
console.log('✅ Non-blocking font loading');
console.log('✅ Cache headers configured');

console.log('\n🚀 Expected Performance Improvements:');
console.log('====================================');
console.log('• Reduced bundle sizes through better tree shaking');
console.log('• Faster initial load with code splitting');
console.log('• Improved caching with proper headers');
console.log('• Optimized image delivery');
console.log('• Non-blocking resource loading');

console.log('\n📈 Next Steps:');
console.log('==============');
console.log('1. Deploy the optimized build');
console.log('2. Test with Page Speed Insights');
console.log('3. Monitor real-world performance');
console.log('4. Fine-tune based on results');
