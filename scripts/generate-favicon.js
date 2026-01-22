import { createCanvas, registerFont } from 'canvas';
import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Register the font
const fontPath = join(__dirname, '..', 'public', 'concclassiccond.ttf');
registerFont(fontPath, { family: 'ConcClassicCond' });

// Create a 32x32 canvas (standard favicon size)
const canvas = createCanvas(32, 32);
const ctx = canvas.getContext('2d');

// Set background to transparent
ctx.clearRect(0, 0, 32, 32);

// Set font and draw the letter 'a'
ctx.font = '30px ConcClassicCond';
ctx.fillStyle = 'white';
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.fillText('a', 16, 11);

// Save as PNG
const buffer = canvas.toBuffer('image/png');
const outputPath = join(__dirname, '..', 'public', 'favicon.png');
writeFileSync(outputPath, buffer);

console.log('Favicon generated successfully at:', outputPath);
