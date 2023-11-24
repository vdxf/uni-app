import SwiperView from './SwiperView.vue'
import GuessLike from './GuessLike.vue'
import AddressPanel from '@/pages/detail/components/AddressPanel.vue'

declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    SwiperView: typeof SwiperView
    GuessLike: typeof GuessLike
    AddressPanel: typeof AddressPanel
  }
}

export type GuessLikeInstance = InstanceType<typeof GuessLike>
export type AddressPanelInstance = InstanceType<typeof AddressPanel>
