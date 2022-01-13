<template>
  <el-table-column
    :prop="item.prop"
    :label="item.label"
    :width="item.width"
    :minWidth="item.minWidth"
  >
    <!-- 有children：递归组件 -->
    <template v-if="item.children&&item.children.length">
      <table-column
        v-for="(item,i) in item.children"
        :key="i"
        :item="item"
        @edit-table-data="methods.editTableData"
        @input-on-blur="methods.inputOnBlur"
      />
    </template>
    <!-- 无children：显示内容 -->
    <template v-if="!item.children" #default="scope">
      <!-- :style="{borderLeft:item.border?'3px solid '+item.border:'none'}" -->
      <div
        class="cell-block"
        v-if="scope.row.edit!==item.prop"
        @click.stop="methods.handleCellClick(item.prop, scope.$index)"
      >{{scope.row[item.prop]}}</div>
      <el-input v-else ref="input" @blur="methods.inputOnBlur" v-model="scope.row[item.prop]"></el-input>
    </template>
  </el-table-column>
</template>

<script setup>
import { ref, defineProps, defineEmits, defineExpose, nextTick } from "vue";
import TableColumn from "./TableColumn";

const props = defineProps({
  // 当前列
  item: {
    type: Object,
    default: () => {}
  }
});

const emit = defineEmits(["editTableData", "inputOnBlur"]);
const input = ref();

// methods
const methods = {
  // 单元格被点击
  handleCellClick(prop, index) {
    // console.log(prop, index);
    emit("editTableData", prop, index);
    nextTick(() => {
      // console.log(input); // 递归的子组件传递事件时，input还没有挂载
      input.value && input.value.focus();
    });
  },
  // 子组件传递事件：单元格被点击
  editTableData(prop, index) {
    // console.log(prop, index);
    methods.handleCellClick(prop, index);
  },
  // 输入框失去焦点
  inputOnBlur() {
    emit("inputOnBlur");
  }
};

defineExpose({ methods });
</script>

<style lang="scss" scoped>
</style>