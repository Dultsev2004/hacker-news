<script setup>
import NavItem from "@/components/NavItem.vue";
</script>

<template>
    <nav class="nav">
        <NavItem @click="$router.push('/')">Home
        </NavItem>
        <NavItem>Ask
        </NavItem>
        <NavItem>Jobs
        </NavItem>
        <NavItem>Submit
        </NavItem>
    </nav>
</template>

<style>
.nav{
    display:flex;
    gap: 10px;
}
</style>