import { IDataset } from '@core/interfaces/dataset'
import { atom, useRecoilState } from 'recoil'

export const datasetsState = atom<IDataset[]>({
  key: 'datasetsState',
  default: []
})

export const useDatasets = () => {
  const [datasets, setDatasets] = useRecoilState(datasetsState)

  const setDatasetsState = (datasetsData: IDataset[]) => {
    setDatasets(datasetsData)
  }

  return { datasets, setDatasetsState }
}
