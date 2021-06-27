import {request} from './request.js'

// 请求轮播图的数据

export function getHomeMultidata() {
    return request({
        url: '/home/multidata'
    })
}

// 请求商品的数据

export function getHomeGoods(type, page) {
    return request({
        url: '/home/data',
        params: {
            type,
            page
        }
    })
}

