<script setup>
import {onMounted, ref} from "vue";
import {fetchNew} from "@/composables/api/allNews";
const newsItem = ref({});

const props = defineProps({
  newsItem: {
    type: Number,
    required: true,
  },
})

const getNew = async () => {
  const result = await fetchNew(props.newsItem);
  return result;
}

onMounted(async () => {
  newsItem.value = await getNew();
});

const timeConverter = () => {
  return new Date(newsItem.value.time * 1000).toLocaleString('ru');
}
</script>

<template>
    <div class="new-item" @click="$router.push(`/new/${newsItem.id}`)">
        <h2 class="new-item__title">{{ newsItem.title }}</h2>
        <p class="new-item__item">Автор: {{ newsItem.by }}</p>
        <p class="new-item__item">Дата публикации: {{ timeConverter() }}</p>
    </div>
</template>

<style>
.new-item {
    display: flex;
    flex-direction: column;
    gap: 10px;
    background: #FFFFFF;
    border-radius: 10px;
    padding: 20px;
    cursor: pointer;
}

.new-item__title {
    color: var(--main-color);
    font-size: 20px;
    font-weight: 700;
}

.new-item__item  {
    color: var(--main-color);
    font-size: 12px;
    font-weight: 400;
}

@media screen and (max-width: 320px){
    .new-item__title {
        color: var(--main-color);
        font-size: 16px;
        font-weight: 700;
    }

    .new-item__item {
        color: var(--main-color);
        font-size: 10px;
        font-weight: 400;
    }
}
</style>