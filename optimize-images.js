// Image optimization script
// Run: node optimize-images.js

const fs = require('fs');
const path = require('path');

console.log('🖼️  Image Optimization Recommendations');
console.log('=====================================\n');

const assetDir = './src/asset';
const publicDir = './public/images';

// Check asset directory
if (fs.existsSync(assetDir)) {
  console.log('📁 Found large images in src/asset:');
  
  const checkDirectory = (dir, prefix = '') => {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
      const filePath = path.join(dir, file);
      const stat = fs.statSync(filePath);
      
      if (stat.isDirectory()) {
        checkDirectory(filePath, prefix + file + '/');
      } else if (file.match(/\.(png|jpg|jpeg)$/i)) {
        const sizeInMB = (stat.size / (1024 * 1024)).toFixed(2);
        const status = stat.size > 500000 ? '❌ TOO LARGE' : '✅ OK';
        console.log(`  ${prefix}${file}: ${sizeInMB}MB ${status}`);
        
        if (stat.size > 500000) {
          console.log(`    → Compress to <500KB using TinyPNG or ImageOptim`);
        }
      }
    });
  };
  
  checkDirectory(assetDir);
}

console.log('\n🚀 Optimization Steps:');
console.log('1. Compress all images >500KB to WebP format');
console.log('2. Use next/image with proper sizes prop');
console.log('3. Move images to public/images/ directory');
console.log('4. Add loading="lazy" for below-fold images');
console.log('\n💡 Tools: TinyPNG, Squoosh, ImageOptim');