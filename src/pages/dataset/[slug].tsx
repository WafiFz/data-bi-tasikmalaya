import { useGetDatasetBySlug } from '@core/server/v1/dataset/dataset.hook'
import Content from '@views/dataset/detail/Content'
import Header from '@views/dataset/detail/Header'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import LoaderWithBox from '@core/components/ux/LoaderWithBox'


const DatasetDetail = () => {
  const { getDatasetBySlug, dataset, isLoading } = useGetDatasetBySlug()
  const router = useRouter()
  const slug = router.query.slug as string
  
  useEffect(() => {
    if (slug) {
      getDatasetBySlug(slug)
    }
  }, [])

  if (dataset._id == "") {
    return (<><p>Dataset tidak ditemukan</p></>)
  }

  return (
    <>
      {isLoading && <LoaderWithBox />}
      <Header title={dataset.title} description={dataset.description} source={dataset.source} />

      {/* <Content dataset={dataset} /> */}
    </>
  )
}

export default DatasetDetail