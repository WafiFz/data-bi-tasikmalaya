import CardFileDetail from '@core/components/bi-tasik/cards/CardFileDetail'
import PaginationRounded from '@core/components/navigation/pagination/PaginationRounded'
import React from 'react'

const ListFile: React.FC = () => {
  return (
    <>
      <CardFileDetail
        href="/dataset/Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        title="Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        extension="xlsx"
      />

      <PaginationRounded />
    </>
  )
}

export default ListFile
