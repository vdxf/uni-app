export interface LoginParams {
  code: string
  encryptedData: string
  iv: string
}
export interface LoginResult {
  account: string
  avatar: string
  id: string
  mobile: string
  nickname: string
  token: string
}
