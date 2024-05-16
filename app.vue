<script setup lang="ts">
provideHeadlessUseId(() => useId());

const { data: navigation } = await useAsyncData('navigation', () => fetchContentNavigation());

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
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
