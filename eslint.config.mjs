// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

/**
 * To inspect the full eslint config, run the following:
 * bunx @eslint/config-inspector
 *
 * or inspect via the Nuxt DevTools
 */
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
