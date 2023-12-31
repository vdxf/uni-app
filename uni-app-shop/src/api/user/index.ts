import { $reuqest } from '@/utils/request'
import type { UserInfoResult, UpdataUserInfo } from './type'

//获取用户信息
export const reqUserInfo = () => {
  return $reuqest<UserInfoResult>({
    url: '/member/profile',
    method: 'GET',
  })
}
//修改用户信息
export const reqUpdataUserInfo = (data: UpdataUserInfo) => {
  return $reuqest<UserInfoResult>({
    url: '/member/profile',
    method: 'PUT',
    data,
  })
}
