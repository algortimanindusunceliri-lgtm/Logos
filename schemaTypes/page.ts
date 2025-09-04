// emirsa/schemaTypes/page.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'page',
  title: 'Sayfa',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Sayfa Başlığı',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'URL Adresi (Slug)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    defineField({
        name: 'category',
        title: 'Sayfa Kategorisi',
        type: 'string',
        options: {
            list: [
                {title: 'Genel Sayfa', value: 'general'},
                {title: 'Hikaye Bölümü', value: 'storyChapter'}
            ],
            layout: 'radio'
        },
        initialValue: 'general'
    }),
    // YENİ EKLENEN BÖLÜM NUMARASI ALANI
    defineField({
        name: 'chapterNumber',
        title: 'Bölüm Numarası',
        type: 'number',
        description: 'Hikaye bölümlerini sıralamak için kullanılır (1, 2, 3...).',
        // Bu alanı sadece kategori "Hikaye Bölümü" ise göster
        hidden: ({document}) => document?.category !== 'storyChapter',
        validation: Rule => Rule.integer().positive()
    }),
    defineField({
      name: 'content',
      title: 'Sayfa İçeriği',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
    }),
    defineField({
      name: 'showInMenu',
      title: 'Ana Menüde Göster (Genel Sayfalar için)',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'menuOrder',
      title: 'Menü Sırası',
      type: 'number',
      hidden: ({document}) => !document?.showInMenu,
    }),
  ],
})