import sharp from 'sharp';
import { readdir, stat, mkdir, rename } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import { existsSync } from 'fs';
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, "..");
const PUBLIC_DIR = join(PROJECT_ROOT, "public");
const OLD_DIR = join(PUBLIC_DIR, 'old');

// Supported image extensions
const IMAGE_EXTENSIONS = ['.jpg', '.jpeg', '.png', '.webp'];
const MAX_DIMENSION = 3000;

async function getAllImages(dir, fileList = []) {
  const files = await readdir(dir);
  
  for (const file of files) {
    const filePath = join(dir, file);
    const fileStat = await stat(filePath);
    
    if (fileStat.isDirectory() && file !== 'old') {
      // Recursively search subdirectories
      await getAllImages(filePath, fileList);
    } else if (IMAGE_EXTENSIONS.includes(extname(file).toLowerCase())) {
      // Skip favicon files - they should remain as PNG for browser compatibility
      const fileName = basename(file, extname(file)).toLowerCase();
      if (fileName === 'favicon') {
        console.log(`Skipping favicon: ${filePath}`);
        continue;
      }
      fileList.push(filePath);
    }
  }
  
  return fileList;
}

async function processImage(imagePath) {
  try {
    const image = sharp(imagePath);
    const metadata = await image.metadata();
    
    console.log(`Processing: ${imagePath}`);
    console.log(`  Original: ${metadata.width}x${metadata.height}, format: ${metadata.format}`);
    
    // Calculate new dimensions if needed
    let width = metadata.width;
    let height = metadata.height;
    
    if (width > MAX_DIMENSION || height > MAX_DIMENSION) {
      if (width > height) {
        width = MAX_DIMENSION;
        height = Math.round((metadata.height / metadata.width) * MAX_DIMENSION);
      } else {
        height = MAX_DIMENSION;
        width = Math.round((metadata.width / metadata.height) * MAX_DIMENSION);
      }
      console.log(`  Resizing to: ${width}x${height}`);
    }
    
    // Create relative path for old directory
    const relativePath = imagePath.replace(PUBLIC_DIR + '/', '');
    const oldImagePath = join(OLD_DIR, relativePath);
    const oldImageDir = dirname(oldImagePath);
    
    // Create old directory structure if needed
    if (!existsSync(oldImageDir)) {
      await mkdir(oldImageDir, { recursive: true });
    }
    
    // Check if AVIF already exists
    const avifPath = imagePath.replace(extname(imagePath), '.avif');
    const avifExists = existsSync(avifPath);
    
    // Create AVIF version in original location first (only if it doesn't exist)
    if (!avifExists) {
      await image
        .clone()
        .resize(width, height, {
          fit: 'inside',
          withoutEnlargement: true
        })
        .avif({ quality: 80 })
        .toFile(avifPath);
      
      console.log(`  Created AVIF: ${avifPath}`);
    } else {
      console.log(`  AVIF already exists: ${avifPath}`);
    }
    
    // Move original to old directory AFTER successful conversion
    // Check if file is already in old directory
    if (!imagePath.startsWith(OLD_DIR)) {
      // Check if old file already exists
      if (existsSync(oldImagePath)) {
        console.log(`  Original already exists in old directory: ${oldImagePath}`);
      } else {
        await rename(imagePath, oldImagePath);
        console.log(`  Moved original to: ${oldImagePath}`);
        
        // Compress the old image (reduce quality for JPEG, optimize PNG)
        const oldImage = sharp(oldImagePath);
        const oldExt = extname(oldImagePath).toLowerCase();
        const tempPath = oldImagePath + '.tmp';
        
        if (oldExt === '.jpg' || oldExt === '.jpeg') {
          await oldImage
            .jpeg({ quality: 75, mozjpeg: true })
            .toFile(tempPath);
          // Replace old image with compressed version
          await rename(tempPath, oldImagePath);
          console.log(`  Compressed old image`);
        } else if (oldExt === '.png') {
          await oldImage
            .png({ quality: 80, compressionLevel: 9 })
            .toFile(tempPath);
          // Replace old image with compressed version
          await rename(tempPath, oldImagePath);
          console.log(`  Compressed old image`);
        }
      }
    } else {
      console.log(`  File is already in old directory, skipping move`);
    }
    
    console.log(`  ✓ Done\n`);
    
  } catch (error) {
    console.error(`  ✗ Error processing ${imagePath}:`, error.message);
  }
}

async function main() {
  console.log('Starting image compression...\n');
  
  // Create old directory if it doesn't exist
  if (!existsSync(OLD_DIR)) {
    await mkdir(OLD_DIR, { recursive: true });
    console.log('Created old directory\n');
  }
  
  // Find all images
  const images = await getAllImages(PUBLIC_DIR);
  console.log(`Found ${images.length} images to process\n`);
  
  // Process each image
  for (const imagePath of images) {
    await processImage(imagePath);
  }
  
  console.log('All images processed!');
}

main().catch(console.error);
