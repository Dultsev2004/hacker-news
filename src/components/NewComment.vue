<script setup>
import {onMounted, ref} from "vue";
import {fetchNew} from "@/composables/api/allNews";

const newComment = ref({});

const props = defineProps({
  newComment: {
    type: Object,
    required: true,
  },
})

let loading = ref(false);
const getNew = async () => {
  return await fetchNew(props.newComment);
}

onMounted(async () => {
  newComment.value = await getNew();
});

const converterTime = () => {
  return new Date( props.newComment?.value.time * 1000).toLocaleString('ru');
}
</script>

<template>
  <div class="comment">
    <div class="comment-header">
      <p class="comment_item">Author comment: {{  props.newComment?.by }}</p>
      <p class="comment_item">Comment Added: {{ converterTime( props.newComment?.time) }}</p>
    </div>
    <div class="comment-body">
      <div class="comment_item">{{props.newComment?.text }}</div>
      <div class="comment_item" v-if=" props.newComment?.kids &&  props.newComment?.kids.length">
        <CommentsList :commentId=" props.newComment?.kids"/>
      </div>
    </div>
  </div>
</template>


<style>
.comment {
  border-left: 5px solid var(--main-color);
  padding-left: 5px;
}

.comment-header {
  display: flex;
  gap: 10px;
}

.comment-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.comment_item {
  color: var(--main-color);
  font-size: 13px;
  font-weight: 400;
}

.comment-error{
  color: var(--main-color);
  font-size: 13px;
  font-weight: 400;
}
</style>