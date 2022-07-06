<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <article>
    <ContentRenderer :value="data">
      <template #empty>        
        <p>No content found.</p>      
      </template>
      <h1>{{ data.title }}</h1>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </article>
</template>
