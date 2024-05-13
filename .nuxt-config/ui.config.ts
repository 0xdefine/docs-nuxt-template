import { getIconCollections } from '@egoist/tailwindcss-icons';

import { zksyncIcons } from '../assets/zksync-icons';
import type { NuxtConfig } from 'nuxt/schema';

export const ui: NuxtConfig['ui'] = {
  icons: {
    collections: {
      ...zksyncIcons,
      ...getIconCollections(['heroicons', 'simple-icons', 'devicon', 'logos']),
    },
  },
};
