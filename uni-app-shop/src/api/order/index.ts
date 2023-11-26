import { $reuqest } from '@/utils/request'
import type {
  OrderResult,
  OrderParams,
  SubmitParams,
  OredrDetail,
  SendResult,
  LogisticsResult,
} from './type'
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
//获取订单详情
export const reqOrderDetail = (id: string) => {
  return $reuqest<OredrDetail>({
    url: `/member/order/${id}`,
    method: 'GET',
  })
}
//获取再次购买订单
export const reqOrderSecond = (id: string) => {
  return $reuqest<OrderResult>({
    url: `/member/order/repurchase/${id}`,
    method: 'GET',
  })
}
//模拟发货
export const reqSendOrder = (id: string) => {
  return $reuqest<SendResult>({
    url: `/member/order/consignment/${id}`,
    method: 'GET',
  })
}
//确认收货
export const reqReceiveOrder = (id: string) => {
  return $reuqest<SendResult>({
    url: `/member/order/${id}/receipt`,
    method: 'PUT',
  })
}
//获取订单物流
export const reqOrderLogistics = (id: string) => {
  return $reuqest<LogisticsResult>({
    url: `/member/order/${id}/logistics`,
    method: 'GET',
  })
}
//删除订单
export const reqDelOrder = (data: { ids: string[] }) => {
  return $reuqest({
    url: `/member/order`,
    method: 'DELETE',
    data,
  })
}
//取消订单
export const reqCancelOrder = (data: { cancelReason: string }, id: string) => {
  return $reuqest<OredrDetail>({
    url: `/member/order/${id}/cancel`,
    method: 'PUT',
    data,
  })
}
