import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const assetsDir = path.join(__dirname, '..', 'src', 'assets');

const FILES_TO_CONVERT = ['profile.png', 'ushan.png', 'vw.png', 'logo.png', 'hero.png'];

async function convertToWebP(filePath) {
  const ext = path.extname(filePath);
  const baseName = path.basename(filePath, ext);
  const outputPath = path.join(path.dirname(filePath), `${baseName}.webp`);

  const inputStat = await stat(filePath);
  await sharp(filePath)
    .webp({ quality: 85, effort: 6 })
    .toFile(outputPath);

  const outputStat = await stat(outputPath);
  const saved = inputStat.size - outputStat.size;
  const savedKB = (saved / 1024).toFixed(1);
  const reduction = ((saved / inputStat.size) * 100).toFixed(1);

  console.log(
    `✓ ${baseName}.png → ${baseName}.webp  |  ${(inputStat.size / 1024).toFixed(0)}KB → ${(outputStat.size / 1024).toFixed(0)}KB  (saved ${savedKB}KB, -${reduction}%)`
  );
}

async function main() {
  console.log('🔄 Converting images to WebP...\n');

  for (const file of FILES_TO_CONVERT) {
    const filePath = path.join(assetsDir, file);
    try {
      await convertToWebP(filePath);
    } catch (err) {
      console.warn(`⚠️  Skipped ${file}: ${err.message}`);
    }
  }

  console.log('\n✅ Conversion complete!');
}

main();
