module.exports = {
  root: true,
  extends: ['@nuxt/eslint-config'],
  rules: {
    'quote-props': ['error', 'as-needed'],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
        },
      },
    ],
  },
};
