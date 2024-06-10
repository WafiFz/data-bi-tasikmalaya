import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig
} from 'axios'
import Cookies from 'universal-cookie'

const cookies = new Cookies()

const axiosInsight = axios.create({
  baseURL: process.env.URL_API_INSIGHT,
  timeout: 15000 // Set a timeout value if needed
})

const onRequest = (
  config: InternalAxiosRequestConfig
): InternalAxiosRequestConfig => {
  const token = cookies.get('access_token') || null
  const { headers } = config

  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  return config
}

const onResponse = (response: AxiosResponse): AxiosResponse => response

const onErrorResponse = (error: AxiosError | Error): Promise<AxiosError> => {
  if (axios.isAxiosError(error)) {
    const { message } = error
    const { method, url } = error.config as InternalAxiosRequestConfig
    const { statusText, status } = (error.response as AxiosResponse) ?? {}

    console.error(
      `An error occurred: ${method?.toUpperCase()} ${url} | Error ${status} ${message} ${statusText}`
    )
  } else {
    console.error('An error occurred:', error)
  }

  
return Promise.reject(error)
}

axiosInsight.interceptors.response.use(
  (response) => response,
  (error) => {
    // Handle the error globally
    console.error('An error occurred:', error)

    
return Promise.reject(error)
  }
)

const setupInterceptors = (axiosInsight: AxiosInstance): AxiosInstance => {
  axiosInsight.interceptors.request.use(onRequest)

  axiosInsight.interceptors.response.use(onResponse, onErrorResponse)

  
return axiosInsight
}

export default setupInterceptors(axiosInsight)
