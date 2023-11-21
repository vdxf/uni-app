import { $reuqest } from '@/utils/request'
import type { CartParams, AddCartResult } from './type'

//加入购物车
export const reqAddCart = (data: CartParams) => {
  return $reuqest<AddCartResult>({
    url: '/member/cart',
    method: 'POST',
    data,
  })
}
//获取购物车列表
export const reqCartList = () => {
  return $reuqest<AddCartResult[]>({
    url: '/member/cart',
    method: 'GET',
  })
}
//删除购物车单品
export const reqDeleteCart = (data: { ids: string[] }) => {
  return $reuqest({
    url: '/member/cart',
    method: 'DELETE',
    data,
  })
}
