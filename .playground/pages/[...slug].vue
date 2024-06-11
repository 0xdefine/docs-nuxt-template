<script setup lang="ts">
import type { NavItem } from '@nuxt/content/types';
import { withoutTrailingSlash } from 'ufo';

const route = useRoute();
const { seo } = useAppConfig();

definePageMeta({
  layout: 'directory',
});

const navigation = inject<Ref<NavItem[]>>('navigation', ref([]));
const { data: page } = await useAsyncData(route.path, () => queryContent(route.path).findOne());

if (!page.value) {
  throw createError({ statusCode: 404, statusMessage: 'Page not found', fatal: true });
}

const { data: surround } = await useAsyncData(`${route.path}-surround`, () =>
  queryContent()
    .where({
      _partial: false,
      _extension: 'md',
      navigation: { $ne: false },
    })
    .only(['title', 'description', '_path'])
    .findSurround(withoutTrailingSlash(route.path))
);

useSeoMeta({
  title: page.value.title,
  ogTitle: `${page.value.title} - ${seo?.siteName}`,
  description: page.value.description,
  ogDescription: page.value.description,
});

const breadcrumb = computed(() =>
  mapContentNavigation(findPageBreadcrumb(navigation!.value, page.value)).map(({ label }) => ({ label }))
);

const { toc } = useAppConfig();

const links = computed(() =>
  [
    toc?.bottom?.edit && {
      icon: 'i-heroicons-pencil-square',
      label: 'Edit this page',
      to: `${toc.bottom.edit}/${page.value?._file}`,
      target: '_blank',
    },
    toc?.bottom?.feedback && {
      icon: 'i-heroicons-chat-bubble-oval-left-ellipsis',
      label: 'Share feedback',
      to: `${toc.bottom.feedback}&title=Feedback for ${page.value?.title}&body=Page: ${page.value?._path}`,
      target: '_blank',
    },
    ...(toc?.bottom?.links || []),
  ].filter(Boolean)
);
</script>

<template>
  <UPage v-if="page">
    <UPageHeader
      :title="page.title"
      :description="page.description"
      :links="page.links"
    >
      <template #headline>
        <UBreadcrumb :links="breadcrumb" />
      </template>
    </UPageHeader>

    <UPageBody prose>
      <ContentRenderer
        v-if="page.body"
        :value="page"
      />

      <hr v-if="surround?.length" />

      <UContentSurround :surround="surround" />
    </UPageBody>

    <template
      v-if="page.toc !== false"
      #right
    >
      <UContentToc
        :title="toc?.title"
        :links="page.body?.toc?.links"
      >
        <template
          v-if="toc?.bottom"
          #bottom
        >
          <div
            class="hidden space-y-6 lg:block"
            :class="{ '!mt-6': page.body?.toc?.links?.length }"
          >
            <UDivider
              v-if="page.body?.toc?.links?.length"
              type="dashed"
            />

            <UPageLinks :links="links" />
          </div>
        </template>
      </UContentToc>
    </template>
  </UPage>
</template>
