import Filter from '@views/dataset/Filter'
import Header from '@views/dataset/Header'
import ListFile from '@views/dataset/ListFile'
import React from 'react'

const DatasetPage: React.FC = () => {
  return (
    <>
      <Header />

      <div className="mt-6">
        <Filter />
      </div>

      <div className="mt-6">
        <ListFile />
      </div>
    </>
  )
}

export default DatasetPage
