import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

import Typography from '@mui/material/Typography'
import { useUpdateDataset } from '@core/server/v1/dataset/dataset.hook'

interface Props {
  columns: any[]
  rows: any[]
  columnGroupingModel?: any[]
}

export default function TableDatasetUpdate({
  columns,
  rows,
  columnGroupingModel
}: Props) {
  return (
    <Box sx={{ height: 700, width: 1 }}>
      <Typography variant="h6" gutterBottom>
        Inflasi Bulanan Tahun 2018 - Tasikmalaya
      </Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        columnGroupingModel={columnGroupingModel}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true
          }
        }}
        style={{
          backgroundColor: '#FFFFFF'
        }}
      />
    </Box>
  )
}
