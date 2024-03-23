// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  // Other Vite configuration options...
  build: {
    // Specify the entry point as the index.html file within the portfolio folder
    rollupOptions: {
      input: '/path/to/portfolio/index.html' // Update the path accordingly
    }
  }
});
