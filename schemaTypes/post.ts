// schemas/post.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'post',
  title: 'Makale',
  type: 'document',
  fields: [
    defineField({
      name: 'postTitle',
      title: 'Makale Başlığı',
      type: 'string',
      description: 'Makalenin ana başlığı.', // [cite: 63, 64]
    }),
    defineField({
      name: 'postSlug',
      title: 'URL Adresi (Slug)',
      type: 'slug',
      options: {
        source: 'postTitle',
        maxLength: 96,
      },
      description: 'Makalenin linki, başlığa göre otomatik oluşturulur.', // [cite: 78, 79]
    }),
    defineField({
      name: 'postAuthor',
      title: 'Yazar',
      type: 'string',
      initialValue: 'LOGOS', // [cite: 93, 94]
    }),
    defineField({
      name: 'postImage',
      title: 'Makale Görseli',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Makale listeleme sayfasında ve detayda görünecek kapak fotoğrafı.', // [cite: 66, 67]
    }),
    defineField({
      name: 'postCategory',
      title: 'Kategori',
      type: 'string',
      description: 'Makalenin ait olduğu kategori.', // [cite: 72, 73]
    }),
    defineField({
      name: 'postDate',
      title: 'Yayın Tarihi',
      type: 'datetime',
      description: 'Makalenin yayınlanma tarihi.', // [cite: 75, 76]
    }),
    defineField({
      name: 'postSummary',
      title: 'Makale Özeti',
      type: 'text',
      description: 'Makale listeleme sayfalarında görünecek kısa özet.', // [cite: 69, 70]
    }),
    defineField({
      name: 'postContent',
      title: 'Makale İçeriği',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
      description: 'Makalenin tam içeriği. Başlıklar, listeler, görseller ekleyebilirsiniz.', // [cite: 81, 103, 104, 105]
    }),
  ],
  preview: {
    select: {
      title: 'postTitle',
      author: 'postAuthor',
      media: 'postImage',
    },
  },
})