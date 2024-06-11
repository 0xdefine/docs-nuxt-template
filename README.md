# Docs Template

[![License](https://img.shields.io/badge/license-MIT-blue)](LICENSE-MIT)
[![License: Apache 2.0](https://img.shields.io/badge/license-Apache%202.0-orange)](LICENSE-APACHE)
[![Contributor Covenant](https://img.shields.io/badge/Contributor%20Covenant-2.1-4baaaa.svg)](https://www.contributor-covenant.org/)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-orange)](CONTRIBUTING.md)
[![X (formerly Twitter) Follow](https://badgen.net/badge/twitter/@zksyncDevs/1DA1F2?icon&label)](https://x.com/zksyncDevs)

The docs-nuxt-template is a theme built as a Nuxt Layer to use for Developer Portal related apps.
It contains the color scheme, general theming, components and common Nuxt Modules shared across apps.

## 🚀 Quick start

1. **Install Bun:** Follow the [installation instructions](https://bun.sh/docs/installation).
2. **Install Dependencies:**

   ```sh
   bun install
   ```

3. **Run Locally:** Start the development server at `http://localhost:3000`.

   ```sh
   bun run dev
   ```

This will launch the test site from the `.playground` directory.

## 🖥️ Developing locally

To test the theme during development, the `.playground` directory is available.
Run `bun run dev` to start the playground site, which imports the theme itself.

Content built within the `.playground` are for testing purposes only and
are not built as part of the template package.

### Contributing to the project

To learn more about how to contribute to this project,
check out our [Contributing doc](CONTRIBUTING.md).

## 📦 Using the theme in another project

To use the theme in another project, edit the `nuxt.config.ts` file of the child project and
include this theme in the `extends` property.

```ts
defineNuxtConfig({
  extends: [
    ['github:matter-labs/docs-nuxt-template', { install: true }]
  ]
})
```

## 🛠️ Built With

- [Vue](https://vuejs.org/)
- [Nuxt](https://nuxt.com/)
- [Nuxt Content](https://content.nuxt.com/)
- [Nuxt UI & Nuxt UI Pro](https://ui.nuxt.com/)
- [Tailwind](https://tailwindcss.com/)
- [Bun](https://bun.sh/)
