<script setup>
import {fetchNews} from "@/composables/api/allNews";
import { onMounted, ref} from "vue";
import NewComment from "@/components/NewComment.vue";
const newsIndex = ref([]);

const props = defineProps({
  newsItem: {
    type: Number,
    required: true,
  },
})

const getNews = async () => {
  newsIndex.value = await fetchNews(props.newsItem)
}

onMounted(async () => {
  await getNews();
});
</script>

<template>
  <div class="comments">
    <NewComment v-for="item in newsIndex" :news-item="item" :key="item"/>
  </div>
</template>


<style>
.comments{
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-top: 5px solid var(--main-color);
  padding: 10px;
  background: #E0E0E0;
}
</style>