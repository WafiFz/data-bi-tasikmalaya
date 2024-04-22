import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'

// import { useDemoData } from '@mui/x-data-grid-generator'
import Typography from '@mui/material/Typography'

// const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin']

export default function QuickFilteringGrid() {
  // Definisi struktur columns
  interface Column {
    field: string
    headerName: string
    width: number
  }

  // Data CSV
  const csvData = `Bulan,Tasikmalaya,Jawa Barat,Nasional,Core Inflation,Volatile Food,Adm. Prices,Inflasi Umum (yoy)
Jan,4.19,3.68,3.25,2.63,7.66,7.39,4.19
Feb,4.09,3.69,3.18,2.97,6.40,6.53,4.09
Mar,4.16,3.91,3.40,3.16,6.04,6.48,4.16
Apr,3.49,3.70,3.41,2.93,4.65,4.68,3.49
Mei,3.28,3.51,3.23,2.66,4.76,4.46,3.28
Jun,3.33,3.09,2.72,2.57,6.81,3.40,3.33
Jul,3.44,3.47,3.18,2.82,7.08,2.83,3.44
Agu,2.82,3.55,3.20,2.17,5.17,3.36,2.82
Sep,2.30,3.17,2.88,2.02,2.39,3.29,2.30
Okt,2.43,3.48,3.16,1.94,2.98,3.83,2.43
Nov,2.56,3.55,3.23,1.89,4.00,3.94,2.56
Des,2.30,3.54,3.13,1.73,3.04,3.84,2.30`

  // Parsing data CSV untuk mendapatkan columns
  const lines = csvData.split('\n')
  const headerLine = lines[0]
  const columnFields = headerLine.split(',')
  const columns: Column[] = columnFields.map((field) => ({
    field,
    headerName: field,
    width: 120 // Atur lebar default
  }))

  // Parsing data CSV menjadi rows
  const rows = lines.slice(1).map((rowString, index) => {
    const values = rowString.split(',')
    const row: any = { id: index + 1 }

    columns.forEach((column, columnIndex) => {
      row[column.field] = values[columnIndex]
    })

    
return row
  })

  // console.log(columns);
  // console.log(rows);

  return (
    <Box sx={{ height: 400, width: 1 }}>
      <Typography variant="h6" gutterBottom>
        Inflasi Bulanan Tahun 2018 - Tasikmalaya
      </Typography>

      <DataGrid
        rows={rows}
        columns={columns}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true
          }
        }}
      />
    </Box>
  )
}
