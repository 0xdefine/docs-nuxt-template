import type { NuxtConfig } from 'nuxt/schema';

export const content: NuxtConfig['content'] = {
  markdown: {
    remarkPlugins: ['remark-math'],
    rehypePlugins: {
      'rehype-katex': {
        output: 'html',
        displayMode: true,
      },
    },
  },
  highlight: {
    langs: [
      'asm',
      'c++',
      'go',
      'graphql',
      'groovy',
      'java',
      'jsx',
      'python',
      'rust',
      'solidity',
      'swift',
      'toml',
      'xml',
    ],
    theme: {
      default: 'github-light',
      light: 'github-light',
      dark: 'github-dark',
      sepia: 'monokai',
    },
  },
};
