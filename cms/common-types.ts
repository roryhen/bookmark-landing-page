import type { Field } from '@stackbit/types'

// Compound content types (use with 'object' or 'list' widget)
export const Link: Field[] = [
  {
    label: 'Link text',
    name: 'text',
    type: 'string',
    required: false,
  },
  {
    label: 'Link url',
    name: 'url',
    type: 'string',
    required: false,
  },
]

export const Image: Field[] = [
  {
    label: 'Image',
    name: 'image',
    type: 'image',
    required: false,
  },
  {
    label: 'Alt text',
    name: 'alt',
    type: 'string',
    required: false,
  },
]

export const CTABlock: Field[] = [
  {
    label: 'Heading',
    name: 'heading',
    type: 'string',
    required: false,
  },
  {
    label: 'Snippet',
    name: 'snippet',
    type: 'text',
    required: false,
  },
  {
    label: 'Buttons',
    name: 'buttons',
    type: 'list',
    items: { type: 'object', fields: Link },
  },
  {
    label: 'Featured Image',
    name: 'featured_image',
    type: 'object',
    fields: Image,
  },
]
