<script setup lang="ts">
defineOgImage({
  component: 'OgImageZK',
  title: 'Test Page',
  description: 'A sample test page to test how content displays.',
});
</script>

<template>
  <UPageHeader
    icon="i-zksync-zksync-logo"
    title="PageHeader"
    description="A responsive header for your pages."
  />

  <UPageBody prose>
    <h2>Secondary Heading</h2>
    <p>
      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vestibulum tortor
      quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam egestas semper. Aenean
      ultricies mi vitae est. Mauris placerat eleifend leo. Quisque sit amet est et sapien ullamcorper pharetra.
      Vestibulum erat wisi, condimentum sed, commodo vitae, ornare sit amet, wisi. Aenean fermentum, elit eget tincidunt
      condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac dui. Donec non enim in turpis pulvinar
      facilisis. Ut felis. Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna
      eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor, facilisis luctus, metus
    </p>

    <h2>Ordered List</h2>
    <ol>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
      <li>Vestibulum auctor dapibus neque.</li>
    </ol>

    <UBlogList orientation="horizontal">
      <UBlogPost
        class="not-prose"
        title="Example Blog Title"
        description="Some description to display for a summary of the blog post that is displayed on this example page."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'zkSync' }"
        :authors="[
          {
            name: 'Jane Doe',
            avatar: { src: 'https://avatars.githubusercontent.com/u/812331?v=4', target: '_blank' },
            to: 'https://twitter.com/zksyncDevs',
          },
        ]"
        :badge="{ label: 'Release' }"
      />
      <UBlogPost
        class="not-prose"
        title="Example Blog Title"
        description="Some description to display for a summary of the blog post that is displayed on this example page."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'zkSync' }"
        :authors="[
          {
            name: 'Jane Doe',
            avatar: { src: 'https://avatars.githubusercontent.com/u/812331?v=4', target: '_blank' },
            to: 'https://twitter.com/zksyncDevs',
          },
        ]"
        :badge="{ label: 'Release' }"
      />
      <UBlogPost
        class="not-prose"
        title="Example Blog Title"
        description="Some description to display for a summary of the blog post that is displayed on this example page."
        date="Dec 25, 2023"
        orientation="vertical"
        :image="{ src: 'https://picsum.photos/640/360', alt: 'zkSync' }"
        :authors="[
          {
            name: 'Jane Doe',
            avatar: { src: 'https://avatars.githubusercontent.com/u/812331?v=4', target: '_blank' },
            to: 'https://twitter.com/zksyncDevs',
          },
        ]"
        :badge="{ label: 'Release' }"
      />
    </UBlogList>
    <hr />
    <p>
      <strong>Pellentesque habitant morbi tristique</strong> senectus et netus et malesuada fames ac turpis egestas.
      Vestibulum tortor quam, feugiat vitae, ultricies eget, tempor sit amet, ante. Donec eu libero sit amet quam
      egestas semper. <em>Aenean ultricies mi vitae est.</em> Mauris placerat eleifend leo. Quisque sit amet est et
      sapien ullamcorper pharetra. Vestibulum erat wisi, condimentum sed, <code>commodo vitae</code>, ornare sit amet,
      wisi. Aenean fermentum, elit eget tincidunt condimentum, eros ipsum rutrum orci, sagittis tempus lacus enim ac
      dui. <a href="#">Donec non enim</a> in turpis pulvinar facilisis. Ut felis.
    </p>

    <h2>Header Level 2</h2>

    <ol>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </ol>

    <blockquote>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus magna. Cras in mi at felis aliquet congue. Ut a
        est eget ligula molestie gravida. Curabitur massa. Donec eleifend, libero at sagittis mollis, tellus est
        malesuada tellus, at luctus turpis elit sit amet quam. Vivamus pretium ornare est.
      </p>
    </blockquote>

    <h3>Header Level 3</h3>

    <ul>
      <li>Lorem ipsum dolor sit amet, consectetuer adipiscing elit.</li>
      <li>Aliquam tincidunt mauris eu risus.</li>
    </ul>

    <prose-pre
      language="css"
      filename="example.css"
    >
      #header h1 a { display: block; width: 300px; height: 80px; }
    </prose-pre>
  </UPageBody>
</template>
