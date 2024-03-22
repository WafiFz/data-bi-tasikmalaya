import CardFileDetail from '@core/components/bi-tasik/cards/CardFileDetail'
import React from 'react'

const ListFile: React.FC = () => {
  return (
    <>
      <CardFileDetail
        href="/pages/login"
        title="File Ini adalah yang Pertama"
        extension="pdf"
      />

      <CardFileDetail
        href="/pages/login"
        title="File Ini adalah yang kedua"
        extension="docx"
      />

      <CardFileDetail
        href="/pages/login"
        title="File Ini adalah yang Ketiga"
        extension="xlsx"
      />

      <CardFileDetail
        href="/pages/login"
        title="File Ini adalah yang Keempat"
        extension="pdf"
      />
    </>
  )
}

export default ListFile
