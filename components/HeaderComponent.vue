<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';
import type { Link } from '@nuxt/ui-pro/types';

defineProps<{
  links: Link[];
}>();

const navigation = inject<NavItem[]>('navigation', []);

const config = useRuntimeConfig();

const { header } = useAppConfig();
const headerNav: { to: string; target?: string; label: string }[] =
  config.public.app !== 'template'
    ? [
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
      ]
    : [
        {
          label: 'Kitchen Sink',
          to: '/kitchen-sink',
        },
        {
          label: 'Page',
          to: '/about-us',
        },
      ];
</script>

<template>
  <UHeader
    :links="headerNav"
    :ui="{ container: 'max-w-full' }"
    :to="config.public.app !== 'template' ? config.public.urls.docs : '/'"
  >
    <template #logo>
      <template v-if="header?.logo?.dark || header?.logo?.light">
        <UColorModeImage v-bind="{ class: 'h-6 w-auto', ...header?.logo }" />
      </template>
      <template v-else>
        ZKsync
        <UBadge
          label="Docs"
          variant="subtle"
          class="mb-0.5"
        />
      </template>
    </template>

    <template #right>
      <UColorModeButton variant="soft" />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'gray', variant: 'soft', ...link }"
        />
      </template>
    </template>

    <template #panel>
      <UNavigationTree :links="mapContentNavigation(navigation)" />
    </template>
  </UHeader>
</template>
