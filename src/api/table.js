import request from '@/libs/request'

// 获取dataList
export const getCostList = () => {
    return request.request({
        url: '/api/table/getCostList',
        method: 'get',
    })
}