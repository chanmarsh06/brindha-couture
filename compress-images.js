import Sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function optimizeImages() {
  const assetDir = path.join(__dirname, 'src/asset/bindu');
  const files = fs.readdirSync(assetDir);

  console.log('🖼️  Starting image optimization...\n');

  const largeImages = [
    'original-saree.png',
    'bg-theme-color-2.png',
    'bg-theme-color.png',
    'blue-saree.png',
  ];

  for (const file of files) {
    if (!file.match(/\.(png|jpg|jpeg)$/i)) continue;

    const inputPath = path.join(assetDir, file);
    const outputPath = path.join(assetDir, file.replace(/\.(png|jpg|jpeg)$/i, '.webp'));
    const fileName = path.parse(file).name;

    try {
      const stats = fs.statSync(inputPath);
      const sizeBeforeMB = (stats.size / (1024 * 1024)).toFixed(2);

      if (largeImages.includes(file)) {
        console.log(`⏳ Optimizing: ${file} (${sizeBeforeMB}MB)`);
        
        await Sharp(inputPath)
          .resize(2000, 2000, {
            fit: 'inside',
            withoutEnlargement: true,
          })
          .webp({ quality: 85 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const sizeAfterMB = (newStats.size / (1024 * 1024)).toFixed(2);
        const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

        console.log(`✅ Created: ${fileName}.webp (${sizeAfterMB}MB) - ${reduction}% smaller\n`);
      } else if (stats.size > 300000) {
        console.log(`⏳ Optimizing: ${file} (${sizeBeforeMB}MB)`);
        
        await Sharp(inputPath)
          .webp({ quality: 80 })
          .toFile(outputPath);

        const newStats = fs.statSync(outputPath);
        const sizeAfterMB = (newStats.size / (1024 * 1024)).toFixed(2);
        const reduction = (((stats.size - newStats.size) / stats.size) * 100).toFixed(1);

        console.log(`✅ Created: ${fileName}.webp (${sizeAfterMB}MB) - ${reduction}% smaller\n`);
      }
    } catch (error) {
      console.error(`❌ Error optimizing ${file}:`, error.message);
    }
  }

  console.log('🎉 Image optimization complete!');
  console.log('📝 Next steps:');
  console.log('   1. Update image imports to use .webp files');
  console.log('   2. Keep original PNG/JPG as fallback in <picture> elements');
}

optimizeImages().catch(console.error);
