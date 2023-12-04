<script setup>
import {fetchNew} from "@/composables/api/allNews";
import {onMounted, ref} from "vue";
import {useRoute} from "vue-router";
const newsItem = ref({});
const route = useRoute()
/*
const getNews = async () => {
  newsIndex.value =  await fetchNews()
}

onMounted(async () => {
   await getNews();
});

onMounted(async () => {
  newsItem.value = await fetchNew(route.params.id);
});
*/
</script>

<template>
<!--
    <div class="comments">
      <div class="comment-header">
        <p>{{ comment.by }}</p>
        <p>{{ convertTime(comment.time) }}</p>
      </div>
      <div class="comment-body" v-html="comment.text"></div>
      <div class="comment-body" v-if="comment.kids && comment.kids.length">
        <CommentList :commentIds="props.comment.kids" />
      </div>
    </div>
-->
</template>
  

<style>
.comments{
    display: flex;
    flex-direction: column;
    gap: 5px;
    border-top: 5px solid var(--main-color);
    background: #E0E0E0;
}
</style>