import React from 'react'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'

interface PaginationRoundedProps {
  totalPages: number
  currentPage: number
  onPageChange: (page: number) => void
}

const PaginationRounded: React.FC<PaginationRoundedProps> = ({
  totalPages,
  currentPage,
  onPageChange
}) => {
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    onPageChange(value)
  }

  return (
    <Stack direction="row" justifyContent="center" spacing={4}>
      <Pagination
        count={totalPages}
        variant="outlined"
        shape="rounded"
        color="primary"
        page={currentPage}
        onChange={handlePageChange}
      />
    </Stack>
  )
}

export default PaginationRounded
