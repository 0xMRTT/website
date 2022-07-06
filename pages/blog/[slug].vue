<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <article>
    <h1>{{ data.title }}</h1>
    <ContentRenderer :value="data">
      <template #empty>        
        <p>No content found.</p>      
      </template>
      <template #not-found>
        <p>No content found.</p>  
      </template>
      <ContentRendererMarkdown :value="data" />
    </ContentRenderer>
  </article>
</template>
