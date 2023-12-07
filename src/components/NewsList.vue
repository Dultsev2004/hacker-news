<script setup>
import NewsItem from "@/components/NewsItem.vue";
import {ref, onMounted, computed} from "vue";
import { fetchIdNews } from '@/composables/api/allNews'
const newsIndex = ref([]);

const getNews = async () => {
    newsIndex.value = await fetchIdNews()
}

const displayedNews = computed(() => {
    return newsIndex.value.slice(0, 100);
})

onMounted(async () => {
    await getNews();
});

</script>

<template>
  <section class="news">
    <div class="news-list">
      <NewsItem v-for="item in displayedNews" :news-item="item" :key="item"/>
    </div>
  </section>
</template>

<style>
.news {
  width: 100%;
}

.news-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

@media screen and (max-width: 320px){
    .news-list{
      margin: 0 20px;
    }
}

@media screen and (max-width: 768px){
  .news-list{
    margin: 0 20px;
  }
}
</style>