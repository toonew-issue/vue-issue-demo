<template>
  <h1>Hello World</h1>

  <el-icon> <Delete /></el-icon>

  <VueJsonPretty :data="pipe" />
</template>

<script setup lang="ts">
import { Delete } from '@element-plus/icons';
import { ref } from 'vue';

import VueJsonPretty from 'vue-json-pretty';
import 'vue-json-pretty/lib/styles.css';

const pipe = ref({
  test1:1,
  test2:2
});
</script>
