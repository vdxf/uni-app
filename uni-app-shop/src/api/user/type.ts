export interface UserInfoResult {
  id: string
  avatar: string
  nickname: string
  account: string
  gender: string
  birthday: string
  fullLocation: string
  profession: string
}
export interface UpdataUserInfo {
  nickname?: string
  gender?: string
  birthday?: string
  profession?: string
  provinceCode?: string
  cityCode?: string
  countyCode?: string
}
