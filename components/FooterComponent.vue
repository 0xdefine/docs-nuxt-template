<script setup lang="ts">
const links = [
  {
    icon: 'i-simple-icons-x',
    to: 'https://x.com/zkSyncDevs',
    target: '_blank',
    'aria-label': 'zkSync on X',
  },
  {
    icon: 'i-simple-icons-github',
    to: 'https://github.com/matter-labs',
    target: '_blank',
    'aria-label': 'zkSync on GitHub',
  },
  {
    icon: 'i-simple-icons-discord',
    to: 'https://join.zksync.dev/',
    target: '_blank',
    'aria-label': 'zkSync on Discord',
  },
];
</script>

<template>
  <UFooter>
    <template #left> Made with ❤️ by the zkSync Community </template>

    <template #right>
      <UButton
        v-for="(link, index) of links"
        :key="index"
        v-bind="{ color: 'gray', variant: 'ghost', ...link }"
      />
    </template>
  </UFooter>
</template>
