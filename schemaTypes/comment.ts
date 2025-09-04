// schemas/comment.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'comment',
  title: 'Yorum',
  type: 'document',
  fields: [
    defineField({
      name: 'authorName',
      title: 'Yorum Yapanın Adı',
      type: 'string', // [cite: 150]
    }),
    defineField({
      name: 'commentContent',
      title: 'Yorum İçeriği',
      type: 'text', // [cite: 153]
    }),
    defineField({
      name: 'commentDate',
      title: 'Yorum Tarihi',
      type: 'datetime', // [cite: 156]
    }),
    defineField({
      name: 'relatedPost',
      title: 'İlişkili Makale',
      type: 'reference',
      to: {type: 'post'}, // [cite: 159, 160]
    }),
    defineField({
      name: 'isApproved',
      title: 'Onaylandı mı?',
      type: 'boolean',
      initialValue: false, // [cite: 162, 164]
    }),
    defineField({
      name: 'replies',
      title: 'Cevaplar',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({name: 'authorName', type: 'string', title: 'Cevap Verenin Adı'}),
            defineField({name: 'commentContent', type: 'text', title: 'Cevap İçeriği'}),
            defineField({name: 'commentDate', type: 'datetime', title: 'Cevap Tarihi'}),
          ],
        },
      ], // [cite: 167, 168]
    }),
  ],
  preview: {
    select: {
      title: 'commentContent',
      subtitle: 'authorName',
    },
  },
})