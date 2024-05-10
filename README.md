# Docs Nuxt Template

The docs-nuxt-template is a Nuxt Layer to use for Developer Portal related apps.
It contains the color scheme, general theming and components that work with Nuxt Content.

## Developing

Install dependencies using bun.

```bash
bun install
```

To test the theme during development, the `.playground` directory is available.
Run `bun run dev` to start the playground site, which imports the theme itself.

## Using the theme in another project

To use the theme in another project, edit the `nuxt.config.ts` file of that project and
include this theme in the `extends` property.

```ts
defineNuxtConfig({
  extends: [
    ['github:matter-labs/docs-nuxt-template', { install: true }]
  ]
})
```
