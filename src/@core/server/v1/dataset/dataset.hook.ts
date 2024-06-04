import { useDatasets } from './dataset.state'
import {
  getDatasetsApi,
  getDatasetByIdApi,
  createDatasetApi,
  updateDatasetApi,
  deleteDatasetApi
} from './dataset.api'
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'
import { useState } from 'react'

export const useGetDatasets = () => {
    const { datasets, setDatasetsState } = useDatasets()
    const [isLoading, setIsLoading] = useState(false)
  
    const getDatasets = async (page?: number, itemsPerPage?: number) => {
      setIsLoading(true)
      try {
        const datasetsData = await getDatasetsApi(page, itemsPerPage)
        setDatasetsState(datasetsData.datasets)
      } catch (error) {
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  
    return { getDatasets, datasets, isLoading }
  }

export const useGetDatasetById = () => {
  const { datasets, setDatasetsState } = useDatasets()

  const getDatasetById = async (id: string) => {
    const datasetData = await getDatasetByIdApi(id)
    setDatasetsState([datasetData])
  }

  return { getDatasetById, datasets }
}

export const useCreateDataset = () => {
  const { datasets, setDatasetsState } = useDatasets()

  const createDataset = async (createDatasetDto: ICreateDataset) => {
    const newDataset = await createDatasetApi(createDatasetDto)
    setDatasetsState([...datasets, newDataset])
  }

  return { createDataset, datasets }
}

export const useUpdateDataset = () => {
  const { datasets, setDatasetsState } = useDatasets()

  const updateDataset = async (
    id: string,
    updateDatasetDto: ICreateDataset
  ) => {
    const updatedDataset = await updateDatasetApi(id, updateDatasetDto)
    setDatasetsState(
      datasets.map((dataset) => (dataset.id === id ? updatedDataset : dataset))
    )
  }

  return { updateDataset, datasets }
}

export const useDeleteDataset = () => {
  const { datasets, setDatasetsState } = useDatasets()

  const deleteDataset = async (id: string) => {
    await deleteDatasetApi(id)
    setDatasetsState(datasets.filter((dataset) => dataset.id !== id))
  }

  return { deleteDataset, datasets }
}