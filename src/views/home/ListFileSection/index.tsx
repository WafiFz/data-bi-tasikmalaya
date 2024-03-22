import FileInfo from '@core/components/bi-tasik/text/FileInfo'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import React from 'react'
import ListFile from './ListFile'

const ListFileSection: React.FC = () => {
  const list_file_newest = [
    {
      name: 'Nama',
      source: 'Source',
      createdAt: '17 Juli 2021'
    },
    {
      name: 'Nama 2',
      source: 'Source2',
      createdAt: '18 Juli 2021'
    }
  ]

  const list_file_favorit = [
    {
      name: 'Nama Favorit 1',
      source: 'Source',
      createdAt: '17 Juli 2021'
    },
    {
      name: 'Nama Favorit 2',
      source: 'Source2',
      createdAt: '18 Juli 2021'
    }
  ]

  const list_file_recent = [
    {
      name: 'Nama Recent 1',
      source: 'Source',
      createdAt: '17 Juli 2021'
    },
    {
      name: 'Nama Recent 2',
      source: 'Source2',
      createdAt: '18 Juli 2021'
    }
  ]

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
      <ListFile title={'title.list_file_newest'} list_file={list_file_newest} />
      <ListFile
        title={'title.list_file_favorit'}
        list_file={list_file_favorit}
      />
      <ListFile title={'title.list_file_recent'} list_file={list_file_recent} />
    </div>
  )
}

export default ListFileSection
