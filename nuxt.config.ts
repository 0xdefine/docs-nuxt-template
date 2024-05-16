import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { tailwindcss } from './.nuxt-config/tailwindcss.config';
import { ui } from './.nuxt-config/ui.config';
import { content } from './.nuxt-config/content.config';

const currentDir = dirname(fileURLToPath(import.meta.url));

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ['@nuxt/ui-pro'],
  css: [join(currentDir, './public/main.css'), join(currentDir, './public/katex.min.css')],
  modules: [
    '@nuxt/content',
    '@nuxt/ui',
    '@nuxt/fonts',
    'nuxt-og-image',
    'nuxt-headlessui',
    '@nuxt/devtools',
    '@nuxt/image',
    '@nuxt/eslint',
    '@nuxtjs/seo',
  ],
  site: {
    name: '', // define in child project
    url: '', // define in child project
    indexable: process.env.NUXT_SITE_ENV === 'staging' ? false : true,
    defaultLocale: 'en',
  },
  sitemap: { strictNuxtContentPaths: true },
  schemaOrg: {
    identity: {
      type: 'Organization',
      name: 'Matter Labs',
      url: 'https://matter-labs.io',
      logo: 'https://pbs.twimg.com/profile_images/1559101255355604993/AHMCbrT4_400x400.jpg',
      sameAs: ['https://twitter.com/the_matter_labs'],
    },
  },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName));

      globals.forEach((c) => (c.global = true));
    },
  },
  ui,
  content,
  tailwindcss,
  image: {
    quality: 90,
    format: ['avif', 'webp'],
  },
  fonts: {
    families: [
      { name: 'Raleway', provider: 'google' },
      { name: 'Montserrat', provider: 'google' },
      { name: 'Fira Mono', provider: 'google' },
    ],
  },
  devtools: {
    enabled: true,
  },
  nitro: {
    firebase: {
      gen: 2,
    },
  },
  runtimeConfig: {
    public: {
      mdc: {
        useNuxtImage: true,
      },
    },
  },
  $development: {
    runtimeConfig: {
      public: {
        urls: {
          docs: 'https://staging-docs.zksync.io',
          code: 'https://staging-code.zksync.io',
          sdk: 'https://staging-sdk-docs.zksync.io/sdk',
        },
      },
    },
  },
  $production: {
    runtimeConfig: {
      public: {
        urls: {
          docs: process.env.NUXT_SITE_ENV === 'staging' ? 'https://staging-docs.zksync.io' : 'https://docs.zksync.io',
          code: process.env.NUXT_SITE_ENV === 'staging' ? 'https://staging-code.zksync.io' : 'https://code.zksync.io',
          sdk:
            process.env.NUXT_SITE_ENV === 'staging'
              ? 'https://staging-sdk-docs.zksync.io/sdk'
              : 'https://docs.zksync.io/sdk',
        },
      },
    },
  },
});
