import React from 'react'
import CardFileDetail from '@core/components/bi-tasik/cards/CardFileDetail'
import BackupIcon from '@mui/icons-material/Backup'

const ListFile: React.FC = () => {
  return (
    <>
      <CardFileDetail
        href="/pages/login"
        title={'Topik Ini adalah yang Pertama'}
        icon={<BackupIcon />}
      />
    </>
  )
}

export default ListFile
