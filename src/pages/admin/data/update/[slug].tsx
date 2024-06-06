import { useGetDatasetBySlug } from '@core/server/v1/dataset/dataset.hook'
import Content from '@views/dataset/detail/Content'
import Header from '@views/dataset/detail/Header'
import { useRouter } from 'next/router'
import React, { ReactNode, useEffect } from 'react'
import LoaderWithBox from '@core/components/ux/LoaderWithBox'
import UserLayoutVertical from 'src/layouts/UserLayoutVertical'
import FormUpdateData from '@views/admin/data/update/FormUpdateData'

export default function DatasetUpdate() {
  const { getDatasetBySlug, isLoading, isError } = useGetDatasetBySlug()
  const router = useRouter()
  const slug = router.query.slug as string

  useEffect(() => {
    if (slug) {
      getDatasetBySlug(slug)
    }
  }, [])

    
  if (isError) {
    return (
      <>
        <p>Dataset tidak ditemukan</p>
      </>
    )
  }

  return (
    <>
      <FormUpdateData />

      {/* <Content dataset={dataset.content} /> */}
    </>
  )
}

DatasetUpdate.getLayout = (page: ReactNode) => (
  <UserLayoutVertical>{page}</UserLayoutVertical>
)
