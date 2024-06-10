import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'


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
