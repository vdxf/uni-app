import { $reuqest } from '@/utils/request'
import type { OrderResult, OrderParams, SubmitParams } from './type'
//获取预付订单
export const reqOrderInfo = () => {
  return $reuqest<OrderResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}
//获取立即购买订单
export const reqNowOrderInfo = (data: OrderParams) => {
  return $reuqest<OrderResult>({
    url: '/member/order/pre/now',
    method: 'GET',
    data,
  })
}
//提交订单
export const reqSubmitOrder = (data: SubmitParams) => {
  return $reuqest<{ id: string }>({
    url: '/member/order',
    method: 'POST',
    data,
  })
}
