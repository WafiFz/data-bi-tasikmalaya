import * as React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useRecoilState } from 'recoil'
import { currentPageState } from '@core/server/v1/pagination/currentPageState'

export default function PaginationRounded() {
  const [currentPage, setCurrentPage] = useRecoilState(currentPageState)

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value)
  }

  return (
    <Stack direction="row" justifyContent="center" spacing={4}>
      <Pagination
        count={10}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  )
}
