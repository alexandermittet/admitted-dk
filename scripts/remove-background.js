import sharp from 'sharp';
import { exec } from 'child_process';
import { promisify } from 'util';
import { join } from 'path';
import { existsSync } from 'fs';

const execAsync = promisify(exec);
const PUBLIC_DIR = join(process.cwd(), 'public');
const INPUT_FILE = join(PUBLIC_DIR, 'matter.avif');
const TEMP_PNG = join(PUBLIC_DIR, 'matter-temp.png');
const TEMP_NO_BG = join(PUBLIC_DIR, 'matter-temp-no-bg.png');
const OUTPUT_FILE = join(PUBLIC_DIR, 'matter-no-bg.avif');

async function removeBackground() {
  try {
    console.log('Converting AVIF to PNG...');
    await sharp(INPUT_FILE)
      .png()
      .toFile(TEMP_PNG);
    
    console.log('Removing background with rembg...');
    // Use python3 -m rembg to run rembg
    const rembgPath = '/Users/alexandermittet/Library/Python/3.9/bin/rembg';
    const { stdout, stderr } = await execAsync(`${rembgPath} i "${TEMP_PNG}" "${TEMP_NO_BG}"`);
    
    if (stderr && !stderr.includes('WARNING')) {
      console.error('rembg stderr:', stderr);
    }
    
    console.log('Converting back to AVIF...');
    await sharp(TEMP_NO_BG)
      .avif({ quality: 80 })
      .toFile(OUTPUT_FILE);
    
    console.log('Cleaning up temporary files...');
    const { unlink } = await import('fs/promises');
    if (existsSync(TEMP_PNG)) await unlink(TEMP_PNG);
    if (existsSync(TEMP_NO_BG)) await unlink(TEMP_NO_BG);
    
    console.log(`Success! Background removed. Output: ${OUTPUT_FILE}`);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

removeBackground();
