<script setup>
import NewPost from "@/components/NewPost.vue";
import {fetchNew} from "@/composables/api/allNews";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const newsItem = ref({});
const route = useRoute()

onMounted(async () => {
  newsItem.value = await fetchNew(route.params.id);
});
</script>

<template>
    <main class="main">
        <NewPost :newsItem="newsItem" :new-comments="newsItem.id"></NewPost>
    </main>
</template>