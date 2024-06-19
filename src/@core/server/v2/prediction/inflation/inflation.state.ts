import { atom } from 'recoil'

export const inflationDataState = atom({
  key: 'inflationDataState',
  default: {
    title: '',
    series: [],
    labels: [],
    dashArray: [],
    width: []
  }
})

export const mtmInflationDataState = atom({
  key: 'mtmInflationData',
  default: {
    title: '',
    series: [],
    labels: [],
    dashArray: [],
    width: []
  }
})

export const yoyInflationDataState = atom({
  key: 'yoyInflationData',
  default: {
    title: '',
    series: [],
    labels: [],
    dashArray: [],
    width: []
  }
})
