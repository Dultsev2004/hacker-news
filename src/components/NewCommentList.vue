<script setup>
import {fetchNew } from "@/composables/api/allNews";
import { ref } from "vue";
import NewComment from "@/components/NewComment.vue";
const commentsIndex = ref([]);

const props = defineProps({
  newsItem: {
    type: Array,
    required: true,
  },
})

const getCommentsId = async () => {
    for (const item of props.newsItem) {
        const request = await fetchNew(item);
        commentsIndex.value.push(request);
    }
}

getCommentsId();
</script>

<template>
  <div class="comments">
    <NewComment v-for="item in commentsIndex" :comment="item" :key="item"/>
  </div>
</template>


<style>
.comments{
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 3px;
  background: #E0E0E0;
}
</style>