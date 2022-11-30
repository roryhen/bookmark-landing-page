import { Link, Image } from '../common-types'
import type { CmsCollection } from 'netlify-cms-core'

export const settings: CmsCollection = {
  label: 'Settings',
  name: 'settings',
  editor: { preview: false },
  files: [
    {
      label: 'Global',
      name: 'global',
      file: 'cms/content/global.json',
      fields: [
        {
          label: 'Site Name',
          name: 'site_name',
          widget: 'string',
          required: false,
        },
        {
          label: 'Site Description',
          name: 'site_desc',
          widget: 'text',
          required: false,
        },
        {
          label: 'Logo',
          name: 'logo',
          widget: 'object',
          required: false,
          fields: Image,
        },
        {
          label: 'Alternate Logo',
          name: 'alt_logo',
          hint: 'For mobile menu',
          widget: 'object',
          required: false,
          fields: Image,
        },
      ],
    },
    {
      label: 'Navigation',
      name: 'navigation',
      file: 'cms/content/navigation.json',
      fields: [
        {
          label: 'Navigation Links',
          name: 'links',
          widget: 'list',
          summary: 'Link: {{fields.text}} - {{fields.url}}',
          fields: Link,
          max: 5,
        },
        {
          label: 'Call to action',
          name: 'call_to_action',
          widget: 'object',
          required: false,
          summary: 'Button: {{fields.text}} - {{fields.url}}',
          fields: Link,
        },
        {
          label: 'Social Links',
          name: 'social_links',
          widget: 'list',
          summary: 'Link: {{fields.text}} - {{fields.url}}',
          fields: [
            {
              label: 'Platform',
              name: 'platform',
              widget: 'select',
              options: ['Facebook', 'Instagram', 'Twitter', 'TikTok'],
            },
            { label: 'Link url', name: 'url', widget: 'string' },
          ],
          max: 4,
        },
      ],
    },
  ],
}
