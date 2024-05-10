<script setup lang="ts">
import type { NavItem } from '@nuxt/content/dist/runtime/types';

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]));
</script>

<template>
  <UContainer>
    <UPage>
      <slot />
    </UPage>
  </UContainer>
</template>
