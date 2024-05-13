import type { NuxtConfig } from 'nuxt/schema';
import defaultTheme from 'tailwindcss/defaultTheme';

export const tailwindcss: NuxtConfig['tailwindcss'] = {
  config: {
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', ...defaultTheme.fontFamily.sans],
          serif: ['Fraunces', ...defaultTheme.fontFamily.serif],
          mono: ['Fira Mono', ...defaultTheme.fontFamily.mono],
        },
        colors: {
          blue: {
            50: '#C6D5FC',
            100: '#B3C7FB',
            200: '#8CABFA',
            300: '#658EF8',
            400: '#3E72F6',
            500: '#1755F4',
            600: '#0A3FC9',
            700: '#072F94',
            800: '#041E5E',
            900: '#020D29',
            950: '#01040E',
          },
          slate: {
            50: '#D4D9DF',
            100: '#C9CED7',
            200: '#B1B9C5',
            300: '#9AA4B4',
            400: '#838FA2',
            500: '#6C7A91',
            600: '#5A6679',
            700: '#495262',
            800: '#373F4A',
            900: '#262B33',
            950: '#1A1D23',
          },
          zkPurple: {
            50: '#edefff',
            100: '#dee2ff',
            200: '#c4caff',
            300: '#a0a7ff',
            400: '#8c8aff',
            500: '#695bf9',
            600: '#5a3dee',
            700: '#4e2fd3',
            800: '#3f29aa',
            900: '#362986',
            950: '#22184e',
          },
        },
      },
    },
  },
};
