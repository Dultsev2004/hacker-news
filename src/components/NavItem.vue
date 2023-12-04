<script setup>
</script>

<template>
      <button class="nav-item">
            <slot></slot>
      </button>
</template>

<style>
.nav-item{
      font-family:'Rowdies', sans-serif;
      text-align: start;
      font-size: 12px;
      font-weight: 400;
      color: #FFFFFF;
      text-transform: uppercase;
      cursor:pointer;
      padding: 5px 10px;
      transition: all .3s;
      border-radius: 10px;
      background: none;
      border: none;
      width: 100%;
}

.nav-item:hover{
      color: var(--main-color);
      background: #FFFFFF;
      transition: all .3s;
}

@media screen and (max-width: 320px){
    .nav-item{
      font-size: 10px;
      padding: 3px 6px;
    }
}
</style>