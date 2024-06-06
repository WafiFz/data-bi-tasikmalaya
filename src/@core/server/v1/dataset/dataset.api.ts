import axiosInstance from '@core/constants/axios'
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'
import { handleErrorApi } from '@core/utils/handleErrorApi'

export const getDatasetsApi = async (page?: number, itemsPerPage?: number) => {
  try {
    const response = await axiosInstance.get('/datasets', {
      params: {
        page,
        itemsPerPage,
      },
    })
    return response.data
  } catch (error: any) {
    handleErrorApi(error)
  }
}

export const getDatasetByIdApi = async (id: string) => {
  try {
    const response = await axiosInstance.get(`/datasets/${id}`)
    return response.data
  } catch (error: any) {
    handleErrorApi(error)
  }
}

export const getDatasetBySlugApi = async (slug: string) => {
  try {
    const response = await axiosInstance.get(`/datasets/by-slug/${slug}`)
    return response.data
  } catch (error: any) {
    handleErrorApi(error)
  }
}

export const createDatasetApi = async (createDatasetDto: ICreateDataset) => {
  try {
    const response = await axiosInstance.post('/datasets', createDatasetDto)
    return response.data
  } catch (error: any) {
    handleErrorApi(error)
  }
}

export const updateDatasetApi = async (id: string, updateDatasetDto: ICreateDataset) => {
  try {
    const response = await axiosInstance.patch(`/datasets/${id}`, updateDatasetDto)
    return response.data
  } catch (error: any) {
    handleErrorApi(error)
  }
}

export const deleteDatasetApi = async (id: string) => {
  try {
    await axiosInstance.delete(`/datasets/${id}`)
  } catch (error: any) {
    handleErrorApi(error)
  }
}