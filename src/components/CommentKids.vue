<script setup>
import {onMounted, ref} from "vue";
import {fetchNew} from "@/composables/api/allNews";
const newCommentKids = ref({});

const props = defineProps({
    commentKids: {
        type: Array,
        required: true,
    },
})

const getCommentsId = async () => {
    console.log(props.commentKids);
    for (const item of props.commentKids) {
        newCommentKids.value.push(await fetchNew(item));
    }
}

onMounted(async () => {
    await getCommentsId();
});

const converterTime = () => {
    return new Date(newCommentKids.value.time * 1000).toLocaleString('ru');
}
</script>

<template>
    <div class="comment">
        <div class="comment-header">
            <p class="comment_item">Author comment: {{ newCommentKids.by }}</p>
            <p class="comment_item">Comment Added: {{ converterTime() }}</p>
        </div>
        <div class="comment-body">
            <div class="comment_item">{{ newCommentKids.text }}</div>
        </div>
    </div>
</template>


<style>
.comment {
    border-left: 5px solid var(--main-color);
    padding-left: 5px;
    display: flex;
    flex-direction: column;
    gap: 10px;
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
    color: var(--main-color);
    font-size: 13px;
    font-weight: 400;
}
</style>