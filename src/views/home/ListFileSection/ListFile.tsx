import FileInfo, {
  FileInfoProps
} from '@core/components/bi-tasik/text/FileInfo'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface ListFileProps {
  title: string
  file_collection: FileInfoProps[]
}

const ListFile: React.FC<ListFileProps> = ({ title }) => {
  return (
    <div className="mx-4">
      <Typography variant={'h5'} fontWeight={700} marginTop={8}>
        <FormattedMessage id={title} defaultMessage="Tite List File" />
      </Typography>
      <Divider />

      <FileInfo name="Nama" source="source" createdAt="14 juli 2020" />
    </div>
  )
}

export default ListFile
