/**
 * Parses through the content markdown and yml files
 * to replace the production URLs with the staging URLs.
 */
export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('content:file:beforeParse', (file: { _id: string; body: string }) => {
    if (
      file._id.endsWith('.md') &&
      (process.env.NUXT_SITE_ENV === 'staging' || process.env.NODE_ENV !== 'production')
    ) {
      if (file._id.endsWith('.md') || file._id.endsWith('.yml')) {
        file.body = file.body.replace(/https:\/\/docs\.zksync\.io(?!\/sdk)/g, 'https://staging-docs.zksync.io');
        file.body = file.body.replace(/https:\/\/docs\.zksync\.io\/sdk/g, 'https://staging-docs.zksync.io/sdk');
        file.body = file.body.replace(/https:\/\/code\.zksync\.io/g, 'https://staging-code.zksync.io');
      }
    }
  });
});
