<script setup lang="ts">
  import { useLoginStore } from '@/stores/login/store'
  import { Text } from '@/components/form';
import { reactive } from 'vue';
  const test = useLoginStore()
  const handleCountAdd =  () => {
    test.setCount()
  }

  const obj = reactive({})

</script>

<template>
  <div>我是主页</div>
  <Text label="测试" name="test" id="123" :data="obj"/>
  {{ test.count }}
  <el-button type="primary" @click="handleCountAdd">count++</el-button>
</template>
