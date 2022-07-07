<script setup lang="ts">
const route = useRoute()
const { data } = await useAsyncData(route.path, () => queryContent(route.path).findOne())
</script>

<template>
  <article>
    <h1>{{ data.title }}</h1>
    <p>{{ data.description }}</p>
    <ContentRenderer :value="data" class="prose prose-sm sm:prose lg:prose-lg xl:prose-2xl mx-auto">
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


<style>
h2 {
  initial-letter: L;
  height:35px;
}
</style>