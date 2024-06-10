import Loader from '@core/components/ux/Loader'
import { useGetDatasetBySlug } from '@core/server/v1/dataset/dataset.hook'
import Content from '@views/dataset/detail/Content'
import Header from '@views/dataset/detail/Header'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

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
  }, [slug, getDatasetBySlug])

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
