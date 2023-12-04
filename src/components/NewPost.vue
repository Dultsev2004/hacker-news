<script setup>
import NewComments from "@/components/NewComments.vue";
const props = defineProps({
  newsItem: {
    type: Object,
    required: true,
  },
  newComments:{
    type: Object,
    required: true,
  }
})

const timeConverter = () => {
  return new Date(props.newsItem.time * 1000).toLocaleString('ru');
}
/*
const counterComment = () => {
  return props.newComments.length;
}*/
</script>

<template>
    <div class="new-post">
        <h2 class="new-post__title">{{ newsItem.title }}</h2>
        <p class="new-post__item">Author: {{ newsItem.by }}</p>
        <p class="new-post__item">Data: {{ timeConverter() }}</p>
        <!-- <p class="new-post__item">Comment: {{ counterComment() }}</p> -->
        <NewComments :comments="props.newComments"></NewComments>
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
    margin: 0px 20px;
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

@media screen and (max-width: 320px){
    .new-post__title {
      color: var(--main-color);
      font-size: 16px;
      font-weight: 700;
    }

    .new-post__item {
      color: var(--main-color);
      font-size: 10px;
      font-weight: 400;
    }
}
</style>