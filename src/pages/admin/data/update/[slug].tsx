import Loader from '@core/components/ux/Loader'
import { useGetDatasetBySlug } from '@core/server/v1/dataset/dataset.hook'
import FormUpdateData from '@views/admin/data/update/FormUpdateData'
import TableDatasetUpdate from '@views/admin/data/update/TableDatasetUpdate'
import { useRouter } from 'next/router'
import { ReactNode, useEffect, useState } from 'react'
import UserLayoutVertical from 'src/layouts/UserLayoutVertical'

export default function DatasetUpdate() {
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
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <FormUpdateData />

          <div className="mt-6">
            <TableDatasetUpdate

                // _id={dataset._id}
              columnsDB={dataset.content.columns}
              rowsDB={dataset.content.rows}
              columnGroupingModel={dataset.content.columnGroupingModel}
            />
          </div>
        </>
      )}
    </>
  )
}

DatasetUpdate.getLayout = (page: ReactNode) => (
  <UserLayoutVertical>{page}</UserLayoutVertical>
)
