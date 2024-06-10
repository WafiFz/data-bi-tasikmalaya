import Loader from '@core/components/ux/Loader'
import { useGetDatasets } from '@core/server/v1/dataset/dataset.hook'
import Filter from '@views/dataset/Filter'
import Header from '@views/dataset/Header'
import ListFile from '@views/dataset/ListFile'
import router from 'next/router'
import React from 'react'

const DatasetPage: React.FC = () => {
  const { getDatasets, datasets, isLoading, totalDatasets } = useGetDatasets()
  const currentPageQuery = parseInt(router.query.page as string) || 1
  const itemsPerPageQuery = parseInt(router.query.itemsPerPage as string) || 6

  React.useEffect(() => {
    getDatasets(currentPageQuery, itemsPerPageQuery)
  }, [currentPageQuery, itemsPerPageQuery])

  
return (
    <>
      <Header isLoading={isLoading} totalDatasets={totalDatasets} />

      <div className="mt-6">
        <Filter />
      </div>

      {isLoading ? (
        <div className="mt-6">
          <Loader />
        </div>
      ) : (
        <div className="mt-6">
          <ListFile datasets={datasets} totalDatasets={totalDatasets} />
        </div>
      )}
    </>
  )
}

export default DatasetPage
