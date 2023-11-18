export interface AddressItem extends AddaddressParams {
  id: string
  fullLocation: string
}

export interface AddaddressParams {
  receiver: string
  contact: string
  provinceCode: string
  cityCode: string
  countyCode: string
  address: string
  isDefault: number
}
