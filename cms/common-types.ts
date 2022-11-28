import type { CmsField } from 'netlify-cms-core'

// Compound content types (use with 'object' or 'list' widget)
export const Link: CmsField[] = [
  {
    label: 'Link text',
    name: 'text',
    widget: 'string',
    required: false,
  },
  {
    label: 'Link url',
    name: 'url',
    widget: 'string',
    required: false,
  },
]

export const Image: CmsField[] = [
  {
    label: 'Image',
    name: 'image',
    widget: 'image',
    required: false,
  },
  {
    label: 'Alt text',
    name: 'alt',
    widget: 'string',
    required: false,
  },
]

export const CTABlock: CmsField[] = [
  {
    label: 'Heading',
    name: 'heading',
    widget: 'string',
    required: false,
  },
  {
    label: 'Snippet',
    name: 'snippet',
    widget: 'text',
    required: false,
  },
  {
    label: 'Buttons',
    name: 'buttons',
    widget: 'list',
    fields: Link,
    max: 2,
  },
  {
    label: 'Featured Image',
    name: 'featured_image',
    widget: 'object',
    fields: Image,
  },
]
