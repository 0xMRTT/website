<script>
export default {
    async asyncData({ $content, params }) {
        const article = await $content('articles', params.slug).fetch()

        return { article }
    },
    methods: {
        formatDate(date) {
            const options = { year: 'numeric', month: 'long', day: 'numeric' }
            return new Date(date).toLocaleDateString('en', options)
        }
    }

}
</script>


<template>
    <div>
        <div class="text-sm breadcrumbs">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="#">{{ article.title }}</a></li>
            </ul>
        </div>

        <div class="flex">
            <div class="flex-1">
                <article>
                    <div>
                        <h1 class="text-3xl font-bold underline">{{ article.title }}</h1>
                        <p>{{ article.description }}</p>
                        <img :src="article.img" :alt="article.alt" />
                        <p>Article last updated: {{ formatDate(article.updatedAt) }}</p>
                    </div>
                    <div class="divider-horizontal lg:divider-horizontal"></div>
                    <div>
                        <nuxt-content :document="article" />
                    </div>
                </article>
            </div>

            <div class="divider lg:divider-horizontal"></div>

            <div class="flex-none">
                <ul class="menu  w-56 p-2 rounded-box">
                    <li v-for="link of article.toc" :key="link.id">
                        <NuxtLink :to="`#${link.id}`">{{ link.text }}</NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<style>

.nuxt-content h2 {
    font-weight: bold;
    font-size: 28px;
}

.nuxt-content h3 {
    font-weight: bold;
    font-size: 22px;
}

.nuxt-content p {
    margin-bottom: 20px;
}

.icon.icon-link {
    background-image: url('~assets/svg/hashtag.svg');
    display: inline-block;
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
}
</style>
