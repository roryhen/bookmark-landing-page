import type { Model } from '@stackbit/types'
import { Link, Image } from '../common-types'

export const Settings: Model = {
  name: 'settings',
  type: 'data',
  singleInstance: true,
  filePath: 'content/settings.json',
  fields: [
    {
      label: 'Global',
      name: 'global',
      type: 'object',
      fields: [
        {
          label: 'Site Name',
          name: 'site_name',
          type: 'string',
          required: false,
        },
        {
          label: 'Site Description',
          name: 'site_desc',
          type: 'text',
          required: false,
        },
        {
          label: 'Logo',
          name: 'logo',
          type: 'object',
          required: false,
          fields: Image,
        },
        {
          label: 'Alternate Logo',
          name: 'alt_logo',
          description: 'For mobile menu',
          type: 'object',
          required: false,
          fields: Image,
        },
        {
          label: 'Footer Logo',
          name: 'footer_logo',
          description: 'For logo in footer',
          type: 'object',
          required: false,
          fields: Image,
        },
      ],
    },
    {
      label: 'Navigation',
      name: 'navigation',
      type: 'object',
      fields: [
        {
          label: 'Navigation Links',
          name: 'links',
          type: 'list',
          items: { type: 'object', fields: Link },
        },
        {
          label: 'Call to action',
          name: 'call_to_action',
          type: 'object',
          required: false,
          fields: Link,
        },
        {
          label: 'Social Links',
          name: 'social_links',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                label: 'Platform',
                name: 'platform',
                type: 'enum',
                options: ['Facebook', 'Instagram', 'Twitter', 'TikTok'],
              },
              { label: 'Link url', name: 'url', type: 'string' },
            ],
          },
        },
      ],
    },
  ],
}
