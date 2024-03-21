import FileInfo from '@core/components/bi-tasik/text/FileInfo'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import React from 'react'
import ListFile from './ListFile'

const ListFileSection: React.FC = () => {
  const file_collection = [
    {
      name: 'Nama',
      source: 'Source',
      createdAt: '17 Juli 2021'
    }
  ]
  return (
    <div className="grid grid-cols-3">
      <ListFile
        title={'title.list_file_newest'}
        file_collection={file_collection}
      />
      <ListFile
        title={'title.list_file_newest'}
        file_collection={file_collection}
      />
    </div>
  )
}

export default ListFileSection
