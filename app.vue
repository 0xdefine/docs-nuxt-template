<script setup lang="ts">
provideHeadlessUseId(() => useId());
const config = useRuntimeConfig();

const { seo } = useAppConfig();

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    {
      name: 'keywords',
      content:
        'Documentation, Developers, Era, zkSync, ZK Stack, Matter Labs, rollup, ZK rollup, zero confirmation, ZKP, zero-knowledge proofs, Ethereum, crypto, blockchain, permissionless, L2, secure payments, scalable',
    },
    {
      name: 'description',
      content:
        'zkSync Docs bring you all information you need about our protocol, APIs, SDKs, ZK Stack, and hyperchains. Start with our guides and tutorials, or go deep into our architecture and protocol specification.',
    },
    { name: 'author', content: 'https://matter-labs.io' },
  ],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: {
    lang: 'en',
  },
});

const appUrl = config.public.urls[config.public.app === 'template' ? 'docs' : config.public.app];

useSeoMeta({
  titleTemplate: `%s - ${seo?.siteName}`,
  ogSiteName: seo?.siteName,
  ogUrl: appUrl,
  ogImage: `${appUrl}/social-card.png`,
  ogImageAlt: 'zkSync — Accelerating the mass adoption of crypto for personal sovereignty.',
  ogDescription:
    'zkSync Docs bring you all information you need about our protocol, APIs, SDKs, ZK Stack, and hyperchains. Start with our guides and tutorials, or go deep into our architecture and protocol specification.',
  twitterImage: `${appUrl}/social-card.png`,
  twitterTitle: 'zkSync Developers',
  twitterDescription:
    'zkSync Docs bring you all information you need about our protocol, APIs, SDKs, ZK Stack, and hyperchains. Start with our guides and tutorials, or go deep into our architecture and protocol specification.',
  twitterCard: 'summary_large_image',
  twitterSite: '@zksync',
  twitterCreator: '@the_matter_labs',
  twitterImageAlt: 'zkSync — Accelerating the mass adoption of crypto for personal sovereignty.',
});

provide('navigation', navigation);

const links = computed(() => {
  return [
    {
      label: 'Kitchen Sink',
      to: '/kitchen-sink',
    },
    {
      label: 'About Us',
      to: '/about-us',
    },
  ];
});

defineOgImage({
  component: 'OgImageZK',
});
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <HeaderComponent
      :links
      :search="true"
    />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <FooterComponent />

    <ClientOnly>
      <LazyUContentSearch
        :files="files"
        :navigation="navigation || []"
      />
    </ClientOnly>

    <UNotifications />
  </div>
</template>
