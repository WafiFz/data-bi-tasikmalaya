import Filter from '@views/dataset/Filter'
import Header from '@views/dataset/Header'
import React from 'react'

const DatasetPage: React.FC = () => {
  return (
    <>
      <Header />
      <div className="mt-6">
        <Filter />
      </div>
    </>
  )
}

export default DatasetPage
