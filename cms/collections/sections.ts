import { Link, Image, CTABlock } from '../common-types'
import type { CmsCollection } from 'netlify-cms-core'

export const sections: CmsCollection = {
  label: 'Sections',
  name: 'pages',
  editor: { preview: false },
  files: [
    {
      label: 'Hero',
      name: 'hero',
      file: 'cms/content/sections/hero.json',
      fields: CTABlock,
    },
    {
      label: 'Features',
      name: 'features',
      file: 'cms/content/sections/features.json',
      fields: [
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
          label: 'Tabs',
          name: 'tabs',
          widget: 'list',
          fields: [
            {
              label: 'Tab Title',
              name: 'tab_title',
              widget: 'string',
            },
            {
              label: 'Tab Content',
              name: 'tab_content',
              widget: 'object',
              fields: CTABlock,
            },
          ],
          max: 3,
        },
      ],
    },
    {
      label: 'Integrations',
      name: 'integrations',
      file: 'cms/content/sections/integrations.json',
      fields: [
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
          label: 'Integration',
          name: 'integration',
          widget: 'list',
          fields: [
            ...Image,
            {
              label: 'Title',
              name: 'title',
              widget: 'string',
            },
            {
              label: 'Detail',
              name: 'detail',
              widget: 'string',
            },
            ...Link,
          ],
          max: 3,
        },
      ],
    },
    {
      label: 'FAQs',
      name: 'faqs',
      file: 'cms/content/sections/faqs.json',
      fields: [
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
          label: 'FAQs List',
          name: 'faqs_list',
          widget: 'list',
          fields: [
            {
              label: 'Question',
              name: 'question',
              widget: 'string',
            },
            {
              label: 'Answer',
              name: 'answer',
              widget: 'text',
            },
          ],
        },
        ...Link,
      ],
    },
    {
      label: 'Newsletter',
      name: 'newsletter',
      file: 'cms/content/sections/newsletter.json',
      fields: [
        {
          label: 'Subheading',
          name: 'subeading',
          widget: 'string',
          required: false,
        },
        {
          label: 'Heading',
          name: 'heading',
          widget: 'string',
          required: false,
        },
        {
          label: 'Form placeholder',
          name: 'placeholder',
          widget: 'string',
          required: false,
        },
        {
          label: 'Form button',
          name: 'button',
          widget: 'string',
          required: false,
        },
      ],
    },
  ],
}
