// DOSYA YOLU: C:\Users\Guesst\emirsa\sanity.config.ts

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
// 'schemaTypes' klasöründeki index.ts dosyasından import ediyoruz.
import {schemaTypes} from './schemaTypes' 

export default defineConfig({
  name: 'default',
  title: 'EmirSa',

  projectId: '6jaerbos', // Lütfen bu kısmı kendi proje ID'niz ile değiştirin
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    // index.ts'ten gelen diziyi doğrudan kullanıyoruz
    types: schemaTypes,
  },
})