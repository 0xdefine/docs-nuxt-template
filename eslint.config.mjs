// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt(
  {
    rules: {
      'vue/html-self-closing': [
        'error',
        {
          html: {
            void: 'always',
            normal: 'always',
            component: 'always',
          },
        },
      ],
    },
  },
  {
    files: ['**/layouts/*.vue', '**/pages/**/*.vue'],
    rules: { 'vue/multi-word-component-names': 'off' },
  }
);
