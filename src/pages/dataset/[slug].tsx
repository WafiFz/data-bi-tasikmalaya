import { useGetDatasetBySlug } from '@core/server/v1/dataset/dataset.hook'
import Content from '@views/dataset/detail/Content'
import Header from '@views/dataset/detail/Header'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useState } from 'react'
import LoaderWithBox from '@core/components/ux/LoaderWithBox'
import UserLayoutVertical from 'src/layouts/UserLayoutVertical'
import FormUpdateData from '@views/admin/data/update/FormUpdateData'
import TableDatasetUpdate from '@views/admin/data/update/TableDatasetUpdate'
import Loader from '@core/components/ux/Loader'

export default function DatasetDetail() {
  const { getDatasetBySlug, dataset, isError } = useGetDatasetBySlug()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)
  const slug = router.query.slug as string

  useEffect(() => {
    if (slug) {
      getDatasetBySlug(slug).then(() => {
        setIsLoading(false)
      })
    }
  }, [slug])

  if (isError) {
    return (
      <>
        <p>Dataset tidak ditemukan</p>
      </>
    )
  }

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header
            title={dataset.title}
            description={dataset.description}
            source={dataset.source}
          />
            <Content dataset={ dataset } />
        </>
      )}
    </>
  )
}
