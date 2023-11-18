import { $reuqest } from '@/utils/request'
import type { AddaddressParams, AddressItem } from './type'

//获取地址列表
export const reqAddressList = () => {
  return $reuqest<AddressItem[]>({
    url: '/member/address',
    method: 'GET',
  })
}

//新增收货地址
export const reqAddaddress = (data: AddaddressParams) => {
  return $reuqest({
    url: '/member/address',
    method: 'POST',
    data,
  })
}

//获取地址详情
export const reqAddressInfo = (id: string) => {
  return $reuqest<AddressItem>({
    url: `/member/adderss/`,
    method: 'GET',
  })
}
