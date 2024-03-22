import React from 'react'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import Link from 'next/link'

export interface FileInfoProps {
  name: string
  source: string
  createdAt: string
  href?: string
}

const FileInfo: React.FC<FileInfoProps> = ({
  name,
  source,
  createdAt,
  href = ''
}) => {
  return (
    <>
      <Link href={href}>
        <ListItem>
          <ListItemText primary={name} secondary={`${source}, ${createdAt}`} />
        </ListItem>

        <Divider />
      </Link>
    </>
  )
}

export default FileInfo
