import FileInfo, {
  FileInfoProps
} from '@core/components/bi-tasik/text/FileInfo'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FormattedMessage } from 'react-intl'

interface ListFileProps {
  title: string
  list_file: FileInfoProps[]
}

const ListFile: React.FC<ListFileProps> = ({ title, list_file }) => {
  return (
    <div className="mx-4">
      <Typography variant={'h5'} fontWeight={700} marginTop={8}>
        <FormattedMessage id={title} defaultMessage="Tite List File" />
      </Typography>
      <Divider />

      {list_file.map((file, index) => (
        <FileInfo
          key={index}
          name={file.name}
          source={file.source}
          createdAt={file.createdAt}
          href={file.href}
        />
      ))}
    </div>
  )
}

export default ListFile
