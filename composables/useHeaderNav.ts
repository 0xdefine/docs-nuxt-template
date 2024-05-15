import type { Link } from '@nuxt/ui-pro/types';

export const useHeaderNav = (links: Link[]) => {
  const config = useRuntimeConfig();

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
      },
      {
        label: 'SDK',
        to: config.public.app === 'sdk' ? '/sdk' : `${config.public.urls.sdk}`,
      },
      {
        label: 'ZK Stack',
        to: config.public.app === 'docs' ? '/zk-stack' : `${config.public.urls.docs}/zk-stack`,
      },
      {
        label: 'External Node',
        to: config.public.app === 'docs' ? '/external-node' : `${config.public.urls.docs}/external-node`,
      },
      {
        label: 'Ecosystem',
        to: config.public.app === 'docs' ? '/ecosystem' : `${config.public.urls.docs}/ecosystem`,
      },
      {
        label: 'Community Code',
        to: config.public.app === 'code' ? '/' : `${config.public.urls.code}`,
      },
    ];
  }
};
