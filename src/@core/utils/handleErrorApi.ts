export function handleErrorApi(error: any) {
  if (error.code === 'ECONNABORTED') {
    throw new Error('Request timeout. Please try again later.')
  } else if (error.response) {
    throw new Error(error.response.data.message)
  } else if (error.request) {
    throw new Error('No response received from server')
  } else {
    throw new Error('Internal Sever Error')
  }
}
