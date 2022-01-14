<template>
  <Table
    :table-data="costList"
    :table-settings="tableSettings"
    @edit-table-data="methods.editTableData"
    @input-on-blur="methods.inputOnBlur"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";
import Table from "@/components/table";
import tableSettings from "./tableSettings";
/* api */
import { getCostList } from "@/api/table";

let costList = ref([]);

onMounted(async () => {
  // 获取表格数据
  costList.value = (await getCostList()).data.costList;
  console.log(costList.value);
});

// methods
const methods = {
  // 子组件传递事件：单元格被点击
  editTableData(prop, index) {
    // console.log(prop, index);
    costList.value.forEach((item, i) => {
      item.edit = index === i ? prop : ""; // 根据行的index，更新edit字段
    });
  },
  // 子组件传递事件：输入框失去焦点
  inputOnBlur() {
    costList.value.forEach(item => {
      item.edit = ""; // 重置每行的edit字段
    });
  }
};
</script>

<style scoped>
</style>