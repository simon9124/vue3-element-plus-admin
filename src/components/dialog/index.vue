<template>
  <el-dialog v-model="visible" :title="props.title" :width="props.width">
    <!-- <template #footer>
      <span class="dialog-footer">
        <el-button @click="dialogVisible = false">Cancel</el-button>
        <el-button type="primary" @click="dialogVisible = false">Confirm</el-button>
      </span>
    </template>-->
  </el-dialog>
</template>

<script setup>
import { ref, defineProps, defineExpose, defineEmits } from "vue";

const props = defineProps({
  // 标题
  title: {
    type: String,
    default: ""
  },
  // 宽度
  width: {
    type: String,
    default: "40%"
  },
  // 嵌套内容类型
  type: {
    type: String,
    default: "form"
  }
  //   // 表单数据
  //   formData: {
  //     type: Object,
  //     default: () => {}
  //   }
});

let visible = ref(false);

// methods
const methods = {
  openDialog() {
    visible.value = true;
  }
};

defineExpose({ methods });
</script>

<style scoped>
</style>