<template>
  <!-- <div>
    <el-table v-loading.fullscreen.lock="loading"
              element-loading-background="rgba(0, 0, 0, 0.7)"
              :data="dataList">
      <el-table-column prop="date"
                       label="Date"
                       width="180" />
      <el-table-column prop="name"
                       label="Name"
                       width="180" />
      <el-table-column prop="address"
                       label="Address" />
    </el-table>
  </div> -->
  <router-view></router-view>
</template>

<script>
import {
  reactive,
  onMounted,
} from 'vue'
/* api */
import { getDataList } from "@/api/data"

export default {
  name: 'app',
  setup () {
    const state = reactive({
      dataList: [],
      loading: false
    })
    onMounted(async () => {
      state.loading = true
      const dataList = (await getDataList()).data.dataList
      // console.log(dataList);
      state.dataList = dataList
      state.loading = false
    })
    return state
  },
}

</script>

<style>
body {
  margin: 0;
}
</style>
