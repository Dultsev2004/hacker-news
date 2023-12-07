<script setup>
import {fetchNew } from "@/composables/api/allNews";
import { onMounted, ref} from "vue";
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
        commentsIndex.value.push(await fetchNew(item));
    }
}

onMounted(async () => {
  await getCommentsId(), 5000
});
</script>

<template>
  <div class="comments">
    <NewComment v-for="item in commentsIndex" :comment-id="item" :key="item"/>
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