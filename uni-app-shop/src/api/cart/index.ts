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
