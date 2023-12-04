<script>
export default{
    name:'ButtonDefault',
}
</script>

<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<style>
.btn{
    color:var(--main-color);
    background: #FFFFFF;
    border: 1px solid var(--main-color) ;
    cursor: pointer;
    border-radius: 10px;
    padding: 5px 10px;
    text-transform: uppercase;
    transition: all .3s;
    font-size: 12px;
}

.btn:hover{
    background:var(--main-color);
    color: #FFFFFF;
    border: 1px solid #FFFFFF;
    transition: all .3s;
}

@media screen and (max-width: 320px){
    .btn{
      font-size: 10px;
      padding: 3px 6px;
    }
}
</style>