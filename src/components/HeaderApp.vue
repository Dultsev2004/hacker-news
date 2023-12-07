<script setup>
import NavList from "@/components/NavList.vue"
import ButtonDefault from '@/components/UI/ButtonDefault.vue'
import { ref } from "vue";
import { fetchIdNews } from '@/composables/api/allNews'
const news = ref([]);

const getNews = async () => {
  news.value = await fetchIdNews()
}
</script>

<template>
    <header class="header">
        <section class="header-content">
            <div class="logo" @click="$router.push('/')">
                <img class="logo__img" src="../assets/img/image-general/logo.png" alt="Logo">
                <h1 class="logo__name">Hacker News</h1>
            </div>
            <NavList></NavList>
            <div class="header-btns">
                <ButtonDefault @click="getNews">Reset News</ButtonDefault>
                <ButtonDefault>Change Theme</ButtonDefault>
                <ButtonDefault>Login</ButtonDefault>
            </div>
        </section>
    </header>
</template>

<style>
.header{
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    background: var(--main-color);
    width: 100%;
}

.header-btns{
    display: flex;
    gap: 10px;
}

.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
    max-width: 920px;
    width: 100%;
    padding: 10px 0;
    margin: 0 auto;
}

.logo {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.logo__img {
    width: 20px;
    height: 20px;
}

.logo__name {
    font-family: Verdana, Geneva, sans-serif;
    color: #222222;
    font-size: 16px;
    line-height: 12px;
}

@media screen and (max-width: 320px){
    .header-content{
        display:flex;
        flex-direction: column;
    }
}

@media screen and (max-width: 786px){
  .header-content{
    display:flex;
    flex-direction: column;
    padding: 20px;
  }
}
</style>