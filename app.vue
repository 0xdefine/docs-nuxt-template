<script setup lang="ts">
provideHeadlessUseId(() => useId());

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());
provide('navigation', navigation);

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
});

const route = useRoute();
const links = computed(() => {
  return [
    {
      label: 'Kitchen Sink',
      to: '/kitchen-sink',
      active: route.path.startsWith('/kitchen-sink'),
    },
    {
      label: 'ZK Parser',
      to: '/zk-parser',
      active: route.path.startsWith('/zk-parser'),
    },
    {
      label: 'Page',
      to: '/about-us',
      active: route.path.startsWith('/about-us'),
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
