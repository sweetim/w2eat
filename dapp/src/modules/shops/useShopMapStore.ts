import { create } from "zustand"
import { immer } from "zustand/middleware/immer"

export type MapBound = {
  ne_lat: number
  ne_lon: number
  sw_lat: number
  sw_lon: number
}

type ShopMapStoreState = {
  current: MapBound | null
  active: MapBound | null
}

type ShopMapStoreActions = {
  setCurrentBound: (input: MapBound) => void
  setActiveBound: (input: MapBound) => void
}

export const useShopMapStore = create<ShopMapStoreState & ShopMapStoreActions>()(
  immer((set) => ({
    current: null,
    active: null,
    setCurrentBound: (input: MapBound) =>
      set((state) => {
        state.current = input
      }),
    setActiveBound: (input: MapBound) =>
      set((state) => {
        state.active = input
      }),
  })),
)
