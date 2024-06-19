import { atom } from 'recoil'

export const inflationDataState = atom({
  key: 'inflationDataState',
    default: {
        title: "",
        series: [],
        labels: [],
        dashArray: [],
        width: [],
  }
})
