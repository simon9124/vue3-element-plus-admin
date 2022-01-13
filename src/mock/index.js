import Mock from 'mockjs'
import {
  getDataList
} from './data'
import {
  getCostList
} from './table'

// 配置Ajax请求延时，可用来测试网络延迟大时项目中一些效果
Mock.setup({
  timeout: 1000,
})

Mock.mock(/\/api\/data\/getDataList/, getDataList)
Mock.mock(/\/api\/table\/getCostList/, getCostList)

export default Mock