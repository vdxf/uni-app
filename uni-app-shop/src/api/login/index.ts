import { $reuqest } from '@/utils/request'
import type { LoginParams, LoginResult } from './type'
//登录
export const reqLogin = (data: LoginParams) => {
  return $reuqest<LoginResult>({
    url: '/login/wxMin',
    method: 'POST',
    data,
  })
}
//模拟登录
export const reqLoginSimple = (data: { phoneNumber: string }) => {
  return $reuqest<LoginResult>({
    url: '/login/wxMin/simple',
    method: 'POST',
    data,
  })
}
