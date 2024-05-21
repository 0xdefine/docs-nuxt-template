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
          code: 'https://community-cookbook-staging.web.app/',
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
          code:
            process.env.NUXT_SITE_ENV === 'staging'
              ? 'https://community-cookbook-staging.web.app/'
              : 'https://code.zksync.io',
          sdk: process.env.NUXT_SITE_ENV === 'staging' ? 'https://staging-docs.zksync.io' : 'https://docs.zksync.io',
        },
      },
    },
  },
});
