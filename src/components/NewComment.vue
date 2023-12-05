<script setup>
import {computed, onMounted, ref} from "vue";
import NewCommentList from "@/components/NewCommentList.vue";
const newComment = ref({});

const props = defineProps({
  commentId: {
    type: Object,
    required: true,
  },
})

onMounted(async () => {
    newComment.value = props.commentId;
});

const converterTime = () => {
  return new Date(newComment.value.time * 1000).toLocaleString('ru');
}
</script>

<template>
  <div class="comment">
    <div class="comment-header">
      <p class="comment_item">Author comment: {{newComment.by }}</p>
      <p class="comment_item">Comment Added: {{ converterTime() }}</p>
    </div>
    <div class="comment-body">
      <p class="comment_item">{{ newComment.text }}</p>
      <div class="comment_item comment_item__kids" v-if="newComment.kids && newComment.kids.length">
          <NewCommentList :news-item="newComment.kids"></NewCommentList>
      </div>
    </div>
  </div>
</template>


<style>
.comment {
    border-left: 5px solid var(--main-color);
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.comment-header {
    display: flex;
    justify-content: space-between;
    gap: 10px;
}

.comment-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.comment_item {
    word-break: break-word;
    color: var(--main-color);
    font-size: 13px;
    font-weight: 400;
}
</style>