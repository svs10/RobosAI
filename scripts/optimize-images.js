const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const ASSETS_DIR = path.join(PUBLIC_DIR, 'assets');

// Supported image formats
const SUPPORTED_FORMATS = ['.png', '.jpg', '.jpeg', '.webp'];

// Optimization settings
const OPTIMIZATION_SETTINGS = {
  png: { quality: 80, compressionLevel: 9 },
  jpg: { quality: 80, mozjpeg: true },
  jpeg: { quality: 80, mozjpeg: true },
  webp: { quality: 80 }
};

async function optimizeImage(filePath) {
  try {
    const ext = path.extname(filePath).toLowerCase();
    const fileName = path.basename(filePath, ext);
    const outputPath = path.join(path.dirname(filePath), `${fileName}${ext}`);
    
    console.log(`Optimizing: ${filePath}`);
    
    const image = sharp(filePath);
    
    // Get image metadata
    const metadata = await image.metadata();
    
    // Resize if image is too large (max width 2000px)
    if (metadata.width > 2000) {
      image.resize({ width: 2000, fit: 'inside' });
    }
    
    // Apply optimization based on format
    switch (ext) {
      case '.png':
        await image.png(OPTIMIZATION_SETTINGS.png).toFile(outputPath);
        break;
      case '.jpg':
      case '.jpeg':
        await image.jpeg(OPTIMIZATION_SETTINGS.jpg).toFile(outputPath);
        break;
      case '.webp':
        await image.webp(OPTIMIZATION_SETTINGS.webp).toFile(outputPath);
        break;
      default:
        console.log(`Skipping unsupported format: ${filePath}`);
        return;
    }
    
    console.log(`✓ Optimized: ${outputPath}`);
  } catch (error) {
    console.error(`Error optimizing ${filePath}:`, error.message);
  }
}

async function optimizeAllImages() {
  console.log('Starting image optimization...');
  
  if (!fs.existsSync(ASSETS_DIR)) {
    console.log('Assets directory not found. Skipping optimization.');
    return;
  }
  
  const files = fs.readdirSync(ASSETS_DIR);
  const imageFiles = files.filter(file => 
    SUPPORTED_FORMATS.includes(path.extname(file).toLowerCase())
  );
  
  if (imageFiles.length === 0) {
    console.log('No images found to optimize.');
    return;
  }
  
  console.log(`Found ${imageFiles.length} images to optimize.`);
  
  for (const file of imageFiles) {
    const filePath = path.join(ASSETS_DIR, file);
    await optimizeImage(filePath);
  }
  
  console.log('Image optimization completed!');
}

// Run optimization if this script is executed directly
if (require.main === module) {
  optimizeAllImages().catch(console.error);
}

module.exports = { optimizeAllImages };
