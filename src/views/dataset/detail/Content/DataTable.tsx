import * as React from 'react'
import Box from '@mui/material/Box'
import { DataGrid, GridToolbar } from '@mui/x-data-grid'
import { useDemoData } from '@mui/x-data-grid-generator'

const VISIBLE_FIELDS = ['name', 'rating', 'country', 'dateCreated', 'isAdmin']

export default function QuickFilteringGrid() {
  const rows = [
    {
      id: 1,
      'Kota/Kabupaten': 'Kota Tasikmalaya',
      'Padi-padian': '6,4%',
      'Lauk Pauk': '6,7%',
      'Sayuran & Kacang': '3,1%',
      'Buah-buahan': '2,8%',
      'Bahan Makanan Lainnya': '3,7%',
      'Makanan Minuman Jadi': '22,9%',
      'Rokok dan Tembakau': '5,8%',
      'Perumahan & Fasilitas RT': '22,8%',
      'Aneka barang dan jasa': '12,6%',
      Sandang: '3,6%',
      'Barang tahan lama': '6,2%',
      'Pajak, pungutan, dan asuransi': '2,4%',
      'Keperluan pesta': '1,0%'
    },
    {
      id: 2,
      'Kota/Kabupaten': 'Kab. Tasikmalaya',
      'Padi-padian': '9,8%',
      'Lauk Pauk': '9,1%',
      'Sayuran & Kacang': '3,8%',
      'Buah-buahan': '2,7%',
      'Bahan Makanan Lainnya': '5,6%',
      'Makanan Minuman Jadi': '18,9%',
      'Rokok dan Tembakau': '11,5%',
      'Perumahan & Fasilitas RT': '19,3%',
      'Aneka barang dan jasa': '8,9%',
      Sandang: '3,2%',
      'Barang tahan lama': '4,4%',
      'Pajak, pungutan, dan asuransi': '1,8%',
      'Keperluan pesta': '1,1%'
    },
    {
      id: 3,
      'Kota/Kabupaten': 'Kab. Ciamis',
      'Padi-padian': '7,7%',
      'Lauk Pauk': '8,0%',
      'Sayuran & Kacang': '4,1%',
      'Buah-buahan': '3,3%',
      'Bahan Makanan Lainnya': '4,6%',
      'Makanan Minuman Jadi': '18,0%',
      'Rokok dan Tembakau': '8,2%',
      'Perumahan & Fasilitas RT': '21,7%',
      'Aneka barang dan jasa': '10,6%',
      Sandang: '3,8%',
      'Barang tahan lama': '4,2%',
      'Pajak, pungutan, dan asuransi': '3,4%'
    },
    {
      id: 4,
      'Kota/Kabupaten': 'Kab. Pangandaran',
      'Padi-padian': '8,3%',
      'Lauk Pauk': '9,1%',
      'Sayuran & Kacang': '5,3%',
      'Buah-buahan': '3,3%',
      'Bahan Makanan Lainnya': '5,3%',
      'Makanan Minuman Jadi': '16,7%',
      'Rokok dan Tembakau': '7,2%',
      'Perumahan & Fasilitas RT': '22,9%',
      'Aneka barang dan jasa': '10,2%',
      Sandang: '2,9%',
      'Barang tahan lama': '4,8%',
      'Pajak, pungutan, dan asuransi': '1,6%'
    },
    {
      id: 5,
      'Kota/Kabupaten': 'Kota Banjar',
      'Padi-padian': '8,2%',
      'Lauk Pauk': '8,2%',
      'Sayuran & Kacang': '4,6%',
      'Buah-buahan': '3,1%',
      'Bahan Makanan Lainnya': '5,1%',
      'Makanan Minuman Jadi': '17,9%',
      'Rokok dan Tembakau': '9,1%',
      'Perumahan & Fasilitas RT': '21,7%',
      'Aneka barang dan jasa': '9,8%',
      Sandang: '2,5%',
      'Barang tahan lama': '4,4%',
      'Pajak, pungutan, dan asuransi': '3,2%'
    },
    {
      id: 6,
      'Kota/Kabupaten': 'Priangan Timur',
      'Padi-padian': '7,9%',
      'Lauk Pauk': '8,2%',
      'Sayuran & Kacang': '4,2%',
      'Buah-buahan': '3,0%',
      'Bahan Makanan Lainnya': '4,8%',
      'Makanan Minuman Jadi': '19,0%',
      'Rokok dan Tembakau': '8,1%',
      'Perumahan & Fasilitas RT': '21,8%',
      'Aneka barang dan jasa': '10,6%',
      Sandang: '3,2%',
      'Barang tahan lama': '4,9%',
      'Pajak, pungutan, dan asuransi': '1,8%'
    }
  ]

  const columns = [
    { field: 'Kota/Kabupaten', headerName: 'Kota/Kabupaten', width: 200 },
    { field: 'Padi-padian', headerName: 'Padi-padian', width: 150 },
    { field: 'Lauk Pauk', headerName: 'Lauk Pauk', width: 150 },
    { field: 'Sayuran & Kacang', headerName: 'Sayuran & Kacang', width: 200 },
    { field: 'Buah-buahan', headerName: 'Buah-buahan', width: 150 },
    {
      field: 'Bahan Makanan Lainnya',
      headerName: 'Bahan Makanan Lainnya',
      width: 200
    },
    {
      field: 'Makanan Minuman Jadi',
      headerName: 'Makanan Minuman Jadi',
      width: 200
    },
    {
      field: 'Rokok dan Tembakau',
      headerName: 'Rokok dan Tembakau',
      width: 200
    },
    {
      field: 'Perumahan & Fasilitas RT',
      headerName: 'Perumahan & Fasilitas RT',
      width: 250
    },
    {
      field: 'Aneka barang dan jasa',
      headerName: 'Aneka barang dan jasa',
      width: 200
    },
    { field: 'Sandang', headerName: 'Sandang', width: 150 },
    { field: 'Barang tahan lama', headerName: 'Barang tahan lama', width: 200 },
    {
      field: 'Pajak, pungutan, dan asuransi',
      headerName: 'Pajak, pungutan, dan asuransi',
      width: 250
    },
    { field: 'Keperluan pesta', headerName: 'Keperluan pesta', width: 200 }
  ]

  return (
    <Box sx={{ height: 400, width: 1 }}>
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
