<script setup>
import NewCommentList from "@/components/NewCommentList.vue";
import {computed} from "vue";

const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
})

const converterTime = computed(() => {
  return new Date(props.newsItem?.time * 1000).toLocaleString('ru');
});

const counterComment = computed(() => {
  return props.newsItem.kids?.length;
});

</script>

<template>
    <div class="new-post" v-if="props.newsItem?.title">
        <h2 class="new-post__title">{{ newsItem?.title }}</h2>
        <p class="new-post__item">Author: {{ newsItem?.by }}</p>
        <p class="new-post__item">Data: {{ converterTime }}</p>
        <p class="new-post__item">Comment: {{ counterComment }}</p>
        <a href="{{ newsItem.url }}" class="new__link">Link to history</a>
        <NewCommentList v-if="props.newsItem.kids" :news-item="props.newsItem.kids"/>
    </div>
</template>

<style>
.new-post{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    width: 100%;
}

.new-post__title {
    color: var(--main-color);
    font-size: 20px;
    font-weight: 700;
}

.new-post__item {
    color: var(--main-color);
    font-size: 12px;
    font-weight: 400;
}

.new__link{
  font-size: 12px;
  font-weight: 400;
}

@media screen and (max-width: 320px){
    .new-post{
      display: flex;
      flex-direction: column;
      gap: 10px;
      background: #FFFFFF;
      border-radius: 10px;
      padding: 20px;
      margin: 0 20px;
    }

    .new-post__title {
      color: var(--main-color);
      font-size: 14px;
      font-weight: 700;
    }

    .new-post__item {
      color: var(--main-color);
      font-size: 10px;
      font-weight: 400;
    }
}

@media screen and (max-width: 786px){
  .new-post{
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
  }
}
</style>