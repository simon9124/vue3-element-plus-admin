import request from '@/libs/request'

// 获取dataList
export const getDataList = () => {
  return request.request({
    url: '/api/data/getDataList',
    method: 'get',
  })
}
