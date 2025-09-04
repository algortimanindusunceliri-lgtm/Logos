// schemas/siteSettings.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Genel Site Ayarları',
  type: 'document',
  fields: [
    // Genel ve Alt Bilgi Alanları
    defineField({
      name: 'siteLogoText',
      title: 'Site Logo Metni',
      type: 'string', // [cite: 44, 45]
    }),
    defineField({
      name: 'footerDescription',
      title: 'Footer Açıklama Metni',
      type: 'text', // [cite: 47, 48]
    }),
    defineField({
      name: 'copyrightText',
      title: 'Telif Hakkı Metni',
      type: 'string', // [cite: 50, 51]
    }),

    // Kahraman (Hero) Alanı
    defineField({
      name: 'heroTitle',
      title: 'Ana Sayfa - Kahraman Alanı Başlığı',
      type: 'string', // [cite: 2, 3]
    }),
    defineField({
      name: 'heroDescription',
      title: 'Ana Sayfa - Kahraman Alanı Açıklaması',
      type: 'text', // [cite: 5, 6]
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Ana Sayfa - Düğme Metni',
      type: 'string', // [cite: 8, 9]
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Ana Sayfa - Düğme Linki',
      type: 'string', // [cite: 11, 12]
    }),

    // Felsefe Bölümü
    defineField({
      name: 'philosophyTitle',
      title: 'Ana Sayfa - Felsefe Bölümü Başlığı',
      type: 'string', // [cite: 27, 28]
    }),
    defineField({
      name: 'philosophyDescription',
      title: 'Ana Sayfa - Felsefe Bölümü Açıklaması',
      type: 'text', // [cite: 30, 31]
    }),

    // LOGOS Kimdir? Bölümü
    defineField({
      name: 'aboutTitle',
      title: 'Ana Sayfa - Hakkında Bölümü Başlığı',
      type: 'string', // [cite: 34, 35]
    }),
    defineField({
      name: 'aboutImage',
      title: 'Ana Sayfa - Hakkında Bölümü Görseli',
      type: 'image', // [cite: 37, 38]
    }),
    defineField({
        name: 'aboutContent',
        title: 'Ana Sayfa - Hakkında Bölümü İçeriği',
        type: 'array', 
        of: [{type: 'block'}] // [cite: 40, 41, 42]
    }),
    
    // Blog Sayfası
    defineField({
        name: 'blogPageTitle',
        title: 'Blog Sayfası Başlığı',
        type: 'string', // [cite: 54, 55]
    }),
    
    // Renk Paleti ve Fontlar
    defineField({
        name: 'primaryColor',
        title: 'Ana Renk',
        type: 'string', // Renk seçici eklentisi ile daha iyi çalışır
        initialValue: '#2563eb', // [cite: 127, 128]
    }),
    defineField({
        name: 'fontFamily',
        title: 'Font Ailesi',
        type: 'string',
        initialValue: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`, // [cite: 143, 144]
    }),
  ],
})