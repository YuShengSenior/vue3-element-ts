<template>
    <div>
        我是详情页面
    </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
console.log(useRouter().currentRoute.value.params);

</script>

<style scoped>

</style>