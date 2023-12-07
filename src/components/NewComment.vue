<script setup>
import {computed, ref} from "vue";
import NewCommentList from "@/components/NewCommentList.vue";
const newComment = ref({});

const props = defineProps({
  comment: {
    type: Object,
    required: true,
  },
})

newComment.value = props.comment;



const converterTime = computed(() => {
  return new Date(newComment.value.time * 1000).toLocaleString('ru');
});

const converterComment = () => {
    const commentApi = newComment.value.text;
    let newStr = "";

    for (let symbol in commentApi) {
        newStr += String.fromCharCode(parseInt(symbol,16))
    }
    return commentApi
}
</script>

<template>
  <div class="comment">
    <div class="comment-header">
      <p class="comment-header__item">Author comment: {{newComment.by }}</p>
      <p class="comment-header__item">Comment Added: {{ converterTime }}</p>
    </div>
    <div class="comment-body">
      <p class="comment-body__item" v-html="converterComment()"></p>
      <div class="comment-body__item comment_item__kids" v-if="newComment.kids && newComment.kids.length">
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
}

.comment-body {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.comment-header__item {
    word-break: break-word;
    color: var(--main-color);
    font-size: 13px;
    font-weight: 700;
}

.comment-body__item{
    word-break: break-word;
    color: var(--main-color);
    font-size: 13px;
    font-weight: 400;
}

@media screen and (max-width: 786px){
  .comment-header__item {
    word-break: break-word;
    color: var(--main-color);
    font-size: 10px;
    font-weight: 700;
  }
    .comment-body__item{
        word-break: break-word;
        color: var(--main-color);
        font-size: 10px;
        font-weight: 400;
    }

}
</style>