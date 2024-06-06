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

export const datasetState = atom<IDataset>({
  key: 'datasetState',
  default: {
    _id: "",
    title: "",
    slug: "",
    description: "",
    source: "",
    content: []
  }
})

export const useDataset = () => {
  const [dataset, setDataset] = useRecoilState(datasetState)

  const setDatasetState = (datasetData: IDataset) => {
    setDataset(datasetData)
  }

  return { dataset, setDatasetState }
}
