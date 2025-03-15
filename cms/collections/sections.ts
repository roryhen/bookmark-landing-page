import type { Model } from '@stackbit/types'
import { Link, Image, CTABlock } from '../common-types'

export const sections: Model = {
  label: 'Sections',
  name: 'pages',
  type: 'page',
  filePath: 'content/sections/{slug}.json',
  fields: [
    {
      label: 'Hero',
      name: 'hero',
      type: 'object',
      fields: CTABlock,
    },
    {
      label: 'Features',
      name: 'features',
      type: 'object',
      fields: [
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
          label: 'Tabs',
          name: 'tabs',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                label: 'Tab Title',
                name: 'tab_title',
                type: 'string',
              },
              {
                label: 'Tab Content',
                name: 'tab_content',
                type: 'object',
                fields: CTABlock,
              },
            ],
          },
        },
      ],
    },
    {
      label: 'Integrations',
      name: 'integrations',
      type: 'object',
      fields: [
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
          label: 'Integration',
          name: 'integration',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              ...Image,
              {
                label: 'Title',
                name: 'title',
                type: 'string',
              },
              {
                label: 'Detail',
                name: 'detail',
                type: 'string',
              },
              ...Link,
            ],
          },
        },
      ],
    },
    {
      label: 'FAQs',
      name: 'faqs',
      type: 'object',
      fields: [
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
          label: 'FAQs List',
          name: 'faqs_list',
          type: 'list',
          items: {
            type: 'object',
            fields: [
              {
                label: 'Question',
                name: 'question',
                type: 'string',
              },
              {
                label: 'Answer',
                name: 'answer',
                type: 'text',
              },
            ],
          },
        },
        ...Link,
      ],
    },
    {
      label: 'Newsletter',
      name: 'newsletter',
      type: 'object',
      fields: [
        {
          label: 'Subheading',
          name: 'subheading',
          type: 'string',
          required: false,
        },
        {
          label: 'Heading',
          name: 'heading',
          type: 'string',
          required: false,
        },
        {
          label: 'Form placeholder',
          name: 'placeholder',
          type: 'string',
          required: false,
        },
        {
          label: 'Form button',
          name: 'button',
          type: 'string',
          required: false,
        },
      ],
    },
  ],
}
