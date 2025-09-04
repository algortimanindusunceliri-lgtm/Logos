import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless'; // Bu satırı ekle

export default defineConfig({
  // ... diğer ayarlarınız
  output: 'server', // Bu satırı ekle
  adapter: vercel(), // Bu satırı ekle
});