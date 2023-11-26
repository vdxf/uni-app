import { $reuqest } from '@/utils/request'
//支付
export const reqPayWeixin = (data: { orderId: string }) => {
  return $reuqest<WechatMiniprogram.RequestPaymentOption>({
    url: '/pay/wxPay/miniPay',
    method: 'GET',
    data,
  })
}
//模拟支付
export const reqPayWeixinMock = (data: { orderId: string }) => {
  return $reuqest({
    url: '/pay/mock',
    method: 'GET',
    data,
  })
}

