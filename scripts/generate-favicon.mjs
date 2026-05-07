import sharp from "sharp";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "..", "public");

function buildSvg(size) {
  const fontSize = Math.round(size * 0.42);
  const letterSpacing = Math.round(size * 0.02);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}">
  <rect width="${size}" height="${size}" rx="${Math.round(size * 0.16)}" fill="#0f1923"/>
  <text
    x="50%" y="54%"
    dominant-baseline="middle"
    text-anchor="middle"
    font-family="Arial Black, Arial, sans-serif"
    font-weight="900"
    font-size="${fontSize}"
    letter-spacing="${letterSpacing}"
    fill="#e65c1a"
  >KI</text>
</svg>`;
}

// icon.png — 32×32
await sharp(Buffer.from(buildSvg(32)))
  .png()
  .toFile(join(publicDir, "icon.png"));
console.log("✓ icon.png (32×32)");

// apple-icon.png — 180×180
await sharp(Buffer.from(buildSvg(180)))
  .png()
  .toFile(join(publicDir, "apple-icon.png"));
console.log("✓ apple-icon.png (180×180)");

// favicon.ico — embed 32×32 PNG inside minimal ICO container
const png32 = await sharp(Buffer.from(buildSvg(32))).png().toBuffer();

// Build ICO: ICONDIR (6 bytes) + ICONDIRENTRY (16 bytes) + PNG data
const ico = Buffer.alloc(6 + 16 + png32.length);
// ICONDIR
ico.writeUInt16LE(0, 0);       // reserved
ico.writeUInt16LE(1, 2);       // type = 1 (ICO)
ico.writeUInt16LE(1, 4);       // count = 1
// ICONDIRENTRY
ico.writeUInt8(32, 6);         // width  (0 = 256)
ico.writeUInt8(32, 7);         // height
ico.writeUInt8(0, 8);          // color count
ico.writeUInt8(0, 9);          // reserved
ico.writeUInt16LE(1, 10);      // planes
ico.writeUInt16LE(32, 12);     // bit count
ico.writeUInt32LE(png32.length, 14); // size of image data
ico.writeUInt32LE(22, 18);     // offset to image data
png32.copy(ico, 22);

writeFileSync(join(publicDir, "favicon.ico"), ico);
console.log("✓ favicon.ico");
