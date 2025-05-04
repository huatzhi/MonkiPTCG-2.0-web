const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

const sizes = {
  team: { width: 400, height: 400 },
  achievements: { width: 600, height: 400 },
  news: { width: 400, height: 300 }
};

const colors = {
  team: '#4A90E2',
  achievements: '#50E3C2',
  news: '#F5A623'
};

function generatePlaceholderImage(width, height, color, text, outputPath) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // Add text
  ctx.fillStyle = '#FFFFFF';
  ctx.font = 'bold 24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2);

  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(outputPath, buffer);
}

// Create directories if they don't exist
const directories = [
  'public/images/team',
  'public/images/achievements',
  'public/images/news'
];

directories.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate team member images
['john', 'jane', 'mike'].forEach(name => {
  generatePlaceholderImage(
    sizes.team.width,
    sizes.team.height,
    colors.team,
    `Team Member: ${name}`,
    `public/images/team/${name}.jpg`
  );
});

// Generate achievement images
['national-2023', 'regional-2023', 'community-2022'].forEach(name => {
  generatePlaceholderImage(
    sizes.achievements.width,
    sizes.achievements.height,
    colors.achievements,
    `Achievement: ${name}`,
    `public/images/achievements/${name}.jpg`
  );
});

// Generate news images
['regional-win', 'training-program', 'community-tournament'].forEach(name => {
  generatePlaceholderImage(
    sizes.news.width,
    sizes.news.height,
    colors.news,
    `News: ${name}`,
    `public/images/news/${name}.jpg`
  );
});

console.log('Placeholder images generated successfully!'); 