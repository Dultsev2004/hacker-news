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
  return await fetchNew(props.newsItem);
}

onMounted(async () => {
  newsItem.value = await getNew();
});

const converterTime = () => {
  return new Date(newsItem.value.time * 1000).toLocaleString('ru');
}
</script>

<template>
    <div class="new-item" @click="$router.push(`/new/${newsItem.id}`)">
        <h2 class="new-item__title">{{ newsItem.title }}</h2>
        <p class="new__item">Author: {{ newsItem.by }}</p>
        <p class="new__item">Data: {{ converterTime() }}</p>
        <a href="{{ newsItem.url }}" class="new__link">Link to history</a>
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

.new__item  {
    color: var(--main-color);
    font-size: 12px;
    font-weight: 400;
}

.new__link{
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