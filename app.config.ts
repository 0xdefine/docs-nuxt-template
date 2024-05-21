export default defineAppConfig({
  ui: {
    // potential config options: https://github.com/nuxt/ui/tree/dev/src/runtime/ui.config
    variables: {
      light: {
        background: '255 252 255',
        foreground: 'color-gray-900',
      },
      dark: {
        background: 'bg-black',
        foreground: 'color-white',
      },
    },
    primary: 'blue',
    gray: 'slate',
    button: {
      rounded: 'rounded-full',
      variant: {
        solid: 'dark:text-white dark:bg-{color}-500 dark:hover:bg-{color}-400',
        soft: 'dark:bg-gray-900 dark:hover:bg-gray-800',
      },
      padding: {
        xl: 'py-5 px-8',
      },
    },
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
    content: {
      prose: {
        code: {
          icon: {
            go: 'vscode-icons:file-type-go',
            vyper: 'devicon:vyper',
            sol: 'vscode-icons:file-type-solidity',
          },
        },
      },
    },
    navigation: {
      accordion: {
        button: {
          label: 'text-left text-pretty',
        },
      },
    },
  },
  header: {
    logo: {
      alt: '',
      light: '/logos/zksync_logo_black.svg',
      dark: '/logos/zksync_logo.svg',
    },
  },
  footer: {
    credits: 'Made with ❤️ by the zkSync Community',
    links: [
      {
        icon: 'i-simple-icons-x',
        to: 'https://x.com/zkSyncDevs',
        target: '_blank',
        'aria-label': 'zkSync on X',
      },
      {
        icon: 'i-simple-icons-github',
        to: 'https://github.com/matter-labs',
        target: '_blank',
        'aria-label': 'zkSync on GitHub',
      },
      {
        icon: 'i-simple-icons-discord',
        to: 'https://join.zksync.dev/',
        target: '_blank',
        'aria-label': 'zkSync on Discord',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      // edit: 'https://github.com/matter-labs/zksync-docs/edit/staging/content',
      // feedback: 'https://github.com/matter-labs/zksync-docs/issues/new?labels=documentation',
      links: [
        {
          icon: 'i-heroicons-chat-bubble-oval-left-ellipsis-16-solid',
          label: 'Chat on Discord',
          to: 'https://join.zksync.dev/',
          target: '_blank',
        },
        {
          icon: 'i-heroicons-user-group-20-solid',
          label: 'Developer Forum',
          to: 'https://github.com/zkSync-Community-Hub/zkync-developers/discussions',
          target: '_blank',
        },
      ],
    },
  },
});

declare module '@nuxt/schema' {
  interface AppConfigInput {
    myLayer?: {
      /** Project name */
      name?: string;
    };
  }
}
