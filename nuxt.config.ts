import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import { zksyncIcons } from './assets/zksync-icons';
import { tailwindcss } from './.nuxt-config/tailwindcss.config';
import { content } from './.nuxt-config/content.config';

import { getIconCollections } from '@egoist/tailwindcss-icons';

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
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
  site: {
    name: '', // define in child project
    url: '', // define in child project
    indexable: process.env.NUXT_SITE_ENV === 'staging' ? false : true,
    defaultLocale: 'en',
  },
  sitemap: { strictNuxtContentPaths: true },
  hooks: {
    // Define `@nuxt/ui` components as global to use them in `.md` (feel free to add those you need)
    'components:extend': (components) => {
      const globals = components.filter((c) => ['UButton', 'UIcon'].includes(c.pascalName));

      globals.forEach((c) => (c.global = true));
    },
  },
  ui: {
    icons: {
      collections: {
        ...zksyncIcons,
        ...getIconCollections(['heroicons', 'simple-icons', 'devicon', 'logos']),
      },
    },
  },
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
  routeRules: {
    '/api/search.json': { prerender: true },
    '*-surround': { robots: false },
    '/*/*-surround': { robots: false },
    '/*/_dir': { robots: false },
    '/_nuxt': { robots: false },
    '/api/*': { robots: false },
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
  colorMode: {
    storageKey: 'zksync-color-mode',
  },
  $development: {
    runtimeConfig: {
      public: {
        urls: {
          docs: 'https://staging-docs.zksync.io',
          code: 'https://staging-code.zksync.io',
          sdk: 'https://staging-docs.zksync.io',
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
          sdk: process.env.NUXT_SITE_ENV === 'staging' ? 'https://staging-docs.zksync.io' : 'https://docs.zksync.io',
        },
      },
    },
  },
});
