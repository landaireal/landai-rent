// Vercel serverless function wrapper
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Import your server routes
import('../dist/index.cjs').then(module => {
  const server = module.default || module;
  
  // Export for Vercel
  export default server;
});
