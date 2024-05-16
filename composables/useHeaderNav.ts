import type { Link } from '@nuxt/ui-pro/types';

export const useHeaderNav = (links: Link[]) => {
  const config = useRuntimeConfig();
  const route = useRoute();

  if (config.public.app === 'template') {
    return [
      { label: 'Kitchen Sink', to: '/kitchen-sink' },
      { label: 'ZK Parser', to: '/zk-parser' },
      { label: 'Page', to: '/about-us' },
    ];
  } else if (links) {
    return links;
  } else {
    return [
      {
        label: 'Docs',
        to: config.public.app === 'docs' ? '/build' : `${config.public.urls.docs}/build`,
        active: route.path.startsWith('/build'),
      },
      {
        label: 'SDK',
        to: config.public.app === 'sdk' ? '/sdk' : `${config.public.urls.sdk}`,
        active: route.path.startsWith('/sdk'),
      },
      {
        label: 'ZK Stack',
        to: config.public.app === 'docs' ? '/zk-stack' : `${config.public.urls.docs}/zk-stack`,
        active: route.path.startsWith('/zk-stack'),
      },
      {
        label: 'zkSync Node',
        to: config.public.app === 'docs' ? '/zksync-node' : `${config.public.urls.docs}/zksync-node`,
        active: route.path.startsWith('/zksync-node'),
      },
      {
        label: 'Ecosystem',
        to: config.public.app === 'docs' ? '/ecosystem' : `${config.public.urls.docs}/ecosystem`,
        active: route.path.startsWith('/ecosystem'),
      },
      {
        label: 'Community Code',
        to: config.public.app === 'code' ? '/' : `${config.public.urls.code}`,
        active: route.path.startsWith('/tutorials'),
      },
    ];
  }
};
