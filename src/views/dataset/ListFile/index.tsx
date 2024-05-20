import CardFileDetail from '@core/components/bi-tasik/cards/CardFileDetail'
import PaginationRounded from '@core/components/navigation/pagination/PaginationRounded'
import router from 'next/router';
import React, { useState } from 'react'

const ListFile: React.FC = () => {
  const currentPageQuery = parseInt(router.query.page as string) || 1;
  const itemsPerPageQuery = parseInt(router.query.size as string) || 6;

  const [currentPage, setCurrentPage] = useState<number>(currentPageQuery);
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageQuery);
  
  return (
    <>
      <CardFileDetail
        href="/dataset/Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        title="Inflasi Bulanan Tahun 2018 - Tasikmalaya"
        extension="xlsx"
      />

      <PaginationRounded
        totalPages={10}
        currentPage={1}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default ListFile
