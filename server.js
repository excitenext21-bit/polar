import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;
const distPath = path.join(__dirname, 'dist');

// Serve static assets from Vite production build
app.use(express.static(distPath));

// Fallback to index.html for Single Page Application client-side routing
app.get('*', (req, res) => {
  const indexPath = path.join(distPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Production build not found. Please run "npm run build" first.');
  }
});

// Start listening when executed directly
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Polar Air production server listening on port ${PORT}`);
});

export default app;
