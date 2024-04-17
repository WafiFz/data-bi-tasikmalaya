import CardFileDetail from '@core/components/bi-tasik/cards/CardFileDetail'
import PaginationRounded from '@core/components/navigation/pagination/PaginationRounded'
import React from 'react'

const ListFile: React.FC = () => {
  return (
    <>
      <CardFileDetail
        href="/dataset/Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        title="File Ini adalah yang Pertama"
        extension="pdf"
      />

      <CardFileDetail
        href="/dataset/Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        title="File Ini adalah yang kedua"
        extension="docx"
      />

      <CardFileDetail
        href="/dataset/Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        title="File Ini adalah yang Ketiga"
        extension="xlsx"
      />

      <CardFileDetail
        href="/dataset/Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        title="File Ini adalah yang Keempat"
        extension="pdf"
      />

      <PaginationRounded />
    </>
  )
}

export default ListFile
