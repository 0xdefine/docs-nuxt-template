<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';
import type { Link } from '@nuxt/ui-pro/types';

const props = defineProps<{
  links?: Link[];
  search?: boolean;
}>();

const navigation = inject<NavItem[]>('navigation', []);

const config = useRuntimeConfig();

const { header } = useAppConfig();

const headerNav = useHeaderNav(props.links);

const headerLink = computed(() => {
  if (process.env.NODE_ENV !== 'production') {
    return '/';
  } else {
    return config.public.urls[config.public.app] ?? '/';
  }
});
</script>

<template>
  <UHeader
    :links="headerNav"
    :ui="{ container: 'max-w-full', panel: { wrapper: 'dark:bg-black' } }"
    :to="headerLink"
  >
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        zkSync
        <UBadge
          label="Docs"
          variant="subtle"
          class="mb-0.5"
        />
      </template>
    </template>

    <template #right>
      <UContentSearchButton
        v-if="search"
        label=""
        class="lg:hidden"
      />

      <UColorModeButton variant="soft" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'soft', ...link }"
        />
      </template>

      <UContentSearchButton
        v-if="search"
        class="hidden max-w-[180px] lg:flex"
      />
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
