<script setup lang="ts">
import zkSyncConfig from '../../assets/_zksync.json';
const tags: { [key: string]: string } = {};

function parseConfig(config, prefix: string) {
  Object.keys(config).forEach((key) => {
    const value = config[key];
    const newPrefix = `${prefix}_${key}`;
    if (typeof value === 'object' && value !== null) {
      parseConfig(value, newPrefix);
    } else {
      tags[newPrefix] = value;
    }
  });
}

parseConfig(zkSyncConfig, 'zk');
</script>

<template>
  <div>
    <UPageHeader
      icon="i-zksync-zksync-logo"
      title="ZK Parser"
      description="A zk parsing tag to use in markdown content."
    />

    <UPageBody prose>
      <p>
        The ZK Parser is available when writing markdown in Nuxt Content. Wrap the tag with double percent symbols (%).
      </p>
      <ul>
        <li
          v-for="(value, key, indx) in tags"
          :key="indx"
        >
          <strong>{{ key }}</strong> -> {{ value }}
        </li>
      </ul>
    </UPageBody>
  </div>
</template>
