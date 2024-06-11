# Contributing

If you want to help out with contributing to the content of our documentation for ZKsync Docs,
checkout our [Contribution Guidelines](https://docs.zksync.io/build/contributing-to-documentation).

## Contributing to the template

This project is a Nuxt Layer that is a re-usable theme to use across ZKsync Developer Portal related projects.

## Fork the project

Make a [fork of the project](https://github.com/matter-labs/docs-nuxt-template/fork) and create your branches from the default `main` branch.

If your PR is still a work in progress, consider putting it into a [Draft status](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/changing-the-stage-of-a-pull-request#converting-a-pull-request-to-a-draft).
Once your PR is ready for review, switch it back to an active PR request
and any reviewers already attached will automatically get a notification.

## 📜 Commit conventions

This project uses [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) standards.
For changes that are **code related**, use the `fix:`, `feat:`, or `chore:` tags in your commits.
For typo or document related changes, please use the `docs:` tag.

```sh
git commit -m "docs: fix typo in guide"
```

### Signed git commits

Your git commits need to be [signed with a verified signature](https://docs.github.com/en/authentication/managing-commit-signature-verification/about-commit-signature-verification).

1. Follow the instructions to
  [generate a signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/generating-a-new-gpg-key).
1. [Add the key to your GitHub account](https://docs.github.com/en/authentication/managing-commit-signature-verification/adding-a-gpg-key-to-your-github-account).
1. [Tell git about your signing key](https://docs.github.com/en/authentication/managing-commit-signature-verification/telling-git-about-your-signing-key).

### Use VSCode

To take full advantage of linting and formatting features, it is highly
recommended to use [VSCode](https://code.visualstudio.com/) and install the recommended extensions.
To manually install the recommended extensions, go to the Extensions tab
in VSCode and search for `@recommended`.

## What the project uses

This project is built with Vue and Nuxt framework, utilizing various Nuxt Modules for content development.
Familiarize yourself with their documentation to provide you with the full capability of contributing.

### Nuxt

Nuxt is a Vue framework for building applications.
Visit the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction)
for an introduction to its structure and development process.

#### Debugging with Nuxt

Use Nuxt's [DevTools](https://devtools.nuxt.com/) for debugging.
A button with the Nuxt icon :u-icon{name="i-simple-icons-nuxtdotjs"}
appears at the bottom center of the viewport when running locally, opening a helpful panel.

### Nuxt UI

[Nuxt UI](https://ui.nuxt.com/components/) along with
[Nuxt UI Pro](https://ui.nuxt.com/pro/components) are available to build UI.

While Nuxt UI components are a part of the project, they need to be configured in
`nuxt.config.ts` to make them available in `/content` markdown files.
See [the current configuration](https://github.com/matter-labs/docs-nuxt-template/blob/main/nuxt.config.ts#L35)
to discover what components are already loaded.

Local development messages regarding `NUXT_UI_PRO_LICENSE` can be ignored, it will not affect local development and testing.

### Styling

Styling relies on Nuxt UI and [Tailwind](https://tailwindcss.com/).
Adhere to Tailwind's [Utility-First Fundamentals](https://tailwindcss.com/docs/utility-first),
avoiding custom styles in components with the use of the `@apply` feature.

Customizing Nuxt UI components should be done first through the `app.config.ts`
under the `ui` property.
You can learn more about [Theming](https://ui.nuxt.com/getting-started/theming#configuration) on the Nuxt UI website.
