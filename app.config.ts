export default defineAppConfig({
  ui: {
    // potential config options: https://github.com/nuxt/ui/tree/dev/src/runtime/ui.config
    variables: {
      light: {
        background: '#F5F6FD',
        foreground: '#0C0B38',
      },
      dark: {
        background: '#0C0B38',
        foreground: '#F5F6FD',
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
    header: {
      wrapper: 'dark:bg-black bg-white backdrop-blur-none',
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
      toc: {
        button: {
          label: 'text-left text-balance leading-5',
        },
        links: {
          wrapper: 'space-y-2',
          base: 'text-left text-balance leading-5',
        },
      },
    },
    navigation: {
      tree: {
        wrapper: 'space-y-1',
        links: {
          wrapper: 'space-y-1',
          base: 'gap-0.5 py-1',
          label: 'text-left text-balance leading-5',
          level: 'pl-2',
          inactive: 'hover:text-gray-800 dark:hover:text-gray-100',
        },
        accordion: {
          wrapper: 'space-y-1',
          container: 'space-y-1',
          tree: 'ml-1 sm:ml-2',
          button: {
            base: 'py-1',
            label: 'text-left text-balance leading-5',
            level: 'sm:pl-2',
          },
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
  toc: {
    title: 'Table of Contents',
    bottom: {},
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
