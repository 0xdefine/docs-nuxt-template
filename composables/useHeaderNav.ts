import type { Link } from '@nuxt/ui-pro/types';

export const useHeaderNav = (links: Link[]) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  const activeApp = config.public.app;
  const isDocsApp = activeApp === 'docs';
  const isSDKApp = activeApp === 'sdk';
  const isCodeApp = activeApp === 'code';

  if (links) {
    return links;
  } else {
    return computed(() => [
      {
        label: 'Docs',
        to: isDocsApp ? '/build' : `${config.public.urls.docs}/build`,
        active: route.path.startsWith('/build'),
      },
      {
        label: 'SDK',
        to: isDocsApp || isSDKApp ? '/sdk' : `${config.public.urls.docs}/sdk`,
        active: route.path.startsWith('/sdk'),
      },
      {
        label: 'ZK Stack',
        to: isDocsApp ? '/zk-stack' : `${config.public.urls.docs}/zk-stack`,
        active: route.path.startsWith('/zk-stack'),
      },
      {
        label: 'ZKsync Node',
        to: isDocsApp ? '/zksync-node' : `${config.public.urls.docs}/zksync-node`,
        active: route.path.startsWith('/zksync-node'),
      },
      {
        label: 'Ecosystem',
        to: isDocsApp ? '/ecosystem' : `${config.public.urls.docs}/ecosystem`,
        active: route.path.startsWith('/ecosystem'),
      },
      {
        label: 'Community Code',
        to: isCodeApp ? '/' : `${config.public.urls.code}`,
        active: isCodeApp,
      },
    ]);
  }
};
