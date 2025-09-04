// emirsa/schemaTypes/navigation.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'navigation',
  title: 'Navigasyon Menüsü',
  type: 'document',
  fields: [
    defineField({
      name: 'linkTitle',
      title: 'Link Metni',
      type: 'string',
      description: 'Menüde görünecek başlık (Örn: Blog, Hikayem)',
    }),
    // YENİ EKLENEN MENÜ TİPİ ALANI
    defineField({
        name: 'menuType',
        title: 'Menü Tipi',
        type: 'string',
        options: {
            list: [
                {title: 'Basit Link', value: 'simple'},
                {title: 'Açılır Menü - Hikayeler', value: 'dropdownStory'}
            ],
            layout: 'radio'
        },
        initialValue: 'simple'
    }),
    defineField({
      name: 'linkUrl',
      title: 'Link URL Adresi',
      type: 'string',
      description: 'Sadece "Basit Link" seçiliyse gereklidir.',
      hidden: ({document}) => document?.menuType !== 'simple',
    }),
    defineField({
      name: 'menuOrder',
      title: 'Menü Sırası',
      type: 'number',
    }),
  ],
})