<template>
  <el-table :data="tableData" :header-cell-style="{textAlign:'center',background:'#fff'}">
    <el-table-column type="index" align="center" />
    <table-column
      v-for="(item,i) in tableSettings.columns"
      :key="i"
      :item="item"
      @edit-table-data="methods.editTableData"
      @input-on-blur="methods.inputOnBlur"
    />
  </el-table>
</template>

<script setup>
import { defineProps, defineEmits, computed } from "vue";
/* components */
import TableColumn from "./TableColumn";

const props = defineProps({
  // 表格数据
  tableData: {
    type: Array,
    default: () => []
  },
  // 表格配置项
  tableSettings: {
    type: Object,
    default: () => {}
  }
});

const tableData = computed(() =>
  props.tableData.map(item => {
    item.edit = ""; // 每行追加edit字段，默认值为空字符串
    return item;
  })
);
// console.log(tableData);

const emit = defineEmits(["editTableData", "inputOnBlur"]);

// methods
const methods = {
  // 子组件传递事件：单元格被点击
  editTableData(prop, index) {
    emit("editTableData", prop, index);
  },
  // 子组件传递事件：输入框失去焦点
  inputOnBlur() {
    emit("inputOnBlur");
  }
};
</script>

<style lang="scss" scoped>
</style>