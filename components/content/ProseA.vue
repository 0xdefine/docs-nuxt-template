<template>
  <NuxtLink
    :rel="isExternalLink ? 'noopener noreferrer' : ''"
    :href="href"
    :target="isExternalLink ? '_blank' : target"
    class="relative"
    :class="{ 'mr-2': isExternalLink }"
  >
    <slot />
    <UIcon
      v-if="isExternalLink"
      name="i-heroicons-arrow-up-right-20-solid"
      class="absolute -ml-[2px] mt-[4px] h-3 w-3 text-xs font-light"
    />
  </NuxtLink>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

const props = defineProps({
  href: {
    type: String,
    default: '',
  },
  target: {
    type: String as PropType<'_blank' | '_parent' | '_self' | '_top' | null | undefined>,
    default: undefined,
    required: false,
  },
});

const isExternalLink = computed(() => {
  return (props.href.startsWith('http') || props.href.startsWith('//')) && !props.href.includes('.zksync.io');
});
</script>
