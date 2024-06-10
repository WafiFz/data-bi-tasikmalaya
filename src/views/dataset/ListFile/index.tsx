import CardFileDetail from '@core/components/bi-tasik/cards/CardFileDetail'
import PaginationRounded from '@core/components/navigation/pagination/PaginationRounded'
import { IDataset } from '@core/interfaces/dataset'
import { calculateTotalPages } from '@core/utils/pagination'
import router from 'next/router'
import React, { useEffect, useState } from 'react'

interface ListFileProps {
  datasets: IDataset[]
  totalDatasets: number
}

const ListFile: React.FC<ListFileProps> = ({ datasets, totalDatasets }) => {
  const currentPageQuery = parseInt(router.query.page as string) || 1
  const itemsPerPageQuery = parseInt(router.query.itemsPerPage as string) || 6

  const [currentPage, setCurrentPage] = useState<number>(currentPageQuery)
  const [itemsPerPage, setItemsPerPage] = useState<number>(itemsPerPageQuery)
  const totalPages = calculateTotalPages(totalDatasets, itemsPerPage);

  useEffect(() => {
    if (
      currentPage !== currentPageQuery ||
      itemsPerPage !== itemsPerPageQuery
    ) {
      const query = {
        ...router.query,
        page: currentPage.toString(),
        itemsPerPage: itemsPerPage.toString(),
      };
      router.push({ pathname: router.pathname, query }, undefined, { shallow: true });
    }
  }, [currentPage, itemsPerPage, router]);

  return (
    <>
      {datasets.map((dataset, index) => (
        <CardFileDetail
          key={index}
          href={'/dataset/' + dataset.slug}
          title={dataset.title}
          extension={'xlsx'}
        />
      ))}

      <PaginationRounded
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  )
}

export default ListFile
