import { $reuqest } from '@/utils/request'
import type { OrderResult } from './type'
//获取预付订单
export const reqOrderInfo = () => {
  return $reuqest<OrderResult>({
    url: '/member/order/pre',
    method: 'GET',
  })
}
