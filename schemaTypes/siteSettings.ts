// schemas/siteSettings.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'siteSettings',
  title: 'Genel Site Ayarları',
  type: 'document',
  // YENİ: Alanları sekmeler altında gruplayarak paneli daha kullanışlı hale getiriyoruz
  groups: [
    {name: 'colors', title: 'Renk Paleti', default: true},
    {name: 'general', title: 'Genel Ayarlar'},
    {name: 'hero', title: 'Ana Sayfa Hero'},
    {name: 'about', title: 'Ana Sayfa Hakkında'},
  ],
  fields: [
    // --- Renk Paleti Alanları ---
    defineField({
        name: 'primaryColor',
        title: 'Ana Renk (Primary)',
        type: 'color',
        group: 'colors',
        initialValue: '#2563eb',
    }),
    defineField({
        name: 'secondaryColor',
        title: 'İkincil Renk (Secondary)',
        type: 'color',
        group: 'colors',
        initialValue: '#1e40af',
    }),
    defineField({
        name: 'accentColor',
        title: 'Vurgu Rengi (Accent)',
        type: 'color',
        group: 'colors',
        initialValue: '#3b82f6',
    }),
    defineField({
        name: 'textColor',
        title: 'Metin Rengi',
        type: 'color',
        group: 'colors',
        initialValue: '#1f2937',
    }),
    defineField({
        name: 'lightColor',
        title: 'Açık Zemin Rengi',
        type: 'color',
        group: 'colors',
        initialValue: '#f3f4f6',
    }),
    defineField({
        name: 'darkColor',
        title: 'Koyu Zemin Rengi',
        type: 'color',
        group: 'colors',
        initialValue: '#111827',
    }),

    // --- Genel Ayarlar ---
    defineField({
      name: 'siteLogoText',
      title: 'Site Logo Metni',
      type: 'string',
      group: 'general',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Telif Hakkı Metni',
      type: 'string',
      group: 'general',
    }),
     defineField({
        name: 'blogPageTitle',
        title: 'Blog Sayfası Başlığı',
        type: 'string',
        group: 'general',
    }),
    defineField({
        name: 'latestPostsTitle',
        title: 'Ana Sayfa - Son Yazılar Bölüm Başlığı',
        type: 'string',
        group: 'general',
    }),
    

    // --- Ana Sayfa Hero Alanı ---
    defineField({
      name: 'heroTitle',
      title: 'Başlık',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroDescription',
      title: 'Açıklama',
      type: 'text',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaText',
      title: 'Düğme Metni',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroCtaLink',
      title: 'Düğme Linki',
      type: 'string',
      group: 'hero',
    }),

    // --- Ana Sayfa Hakkında Bölümü (Artık Kullanılmıyor ama şemada kalabilir) ---
    defineField({
      name: 'aboutTitle',
      title: 'Başlık',
      type: 'string',
      group: 'about',
    }),
    defineField({
      name: 'aboutImage',
      title: 'Görsel',
      type: 'image',
      group: 'about',
    }),
    defineField({
        name: 'aboutContent',
        title: 'İçerik',
        type: 'array',  
        of: [{type: 'block'}],
        group: 'about',
    }),
  ],
})