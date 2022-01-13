<template>
  <el-form ref="formRef" :model="props.formData" label-width="120px">
    <el-form-item label="Activity name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
  </el-form>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
  // 表单数据
  formData: {
    type: Object,
    default: () => {}
  }
});
</script>

<style scoped>
</style>