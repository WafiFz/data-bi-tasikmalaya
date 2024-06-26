import { useDataset, useDatasets } from './dataset.state'
import {
  getDatasetsApi,
  getDatasetByIdApi,
  createDatasetApi,
  updateDatasetApi,
  deleteDatasetApi,
  getDatasetBySlugApi
} from './dataset.api'
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'
import { useState } from 'react'

export const useGetDatasets = () => {
  const { datasets, setDatasetsState } = useDatasets()
  const [isLoading, setIsLoading] = useState(false)
  const [totalDatasets, setTotalDatasets] = useState(0)

  const getDatasets = async (page?: number, itemsPerPage?: number) => {
    setIsLoading(true)

    try {
      const datasetsData = await getDatasetsApi(page, itemsPerPage)

      setDatasetsState(datasetsData.datasets)

      setTotalDatasets(datasetsData.totalDatasets)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return {
    getDatasets,
    datasets,
    isLoading,
    totalDatasets
  }
}

export const useGetDatasetById = () => {
  const { datasets, setDatasetsState } = useDatasets()

  const getDatasetById = async (id: string) => {
    const datasetData = await getDatasetByIdApi(id)

    setDatasetsState([datasetData])
  }

  return { getDatasetById, datasets }
}

export const useGetDatasetBySlug = () => {
  const { dataset, setDatasetState } = useDataset()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const getDatasetBySlug = async (slug: string) => {
    setIsLoading(true)

    try {
      const dataset = await getDatasetBySlugApi(slug)

      setDatasetState(dataset)
    } catch (error) {
      setIsError(true)

      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { getDatasetBySlug, dataset, isLoading, isError }
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
  const { dataset, setDatasetState } = useDataset()
  const [isLoading, setIsLoading] = useState(false)

  const updateDataset = async (
    id: string,
    updateDatasetDto: ICreateDataset
  ) => {
    try {
      const updatedDataset = await updateDatasetApi(id, updateDatasetDto)

      setDatasetState(updatedDataset)
    } catch (error) {
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }

  return { updateDataset, dataset, isLoading }
}

export const useDeleteDataset = () => {
  const { datasets, setDatasetsState } = useDatasets()

  const deleteDataset = async (id: string) => {
    await deleteDatasetApi(id)

    setDatasetsState(datasets.filter((dataset) => dataset._id !== id))
  }

  return { deleteDataset, datasets }
}
