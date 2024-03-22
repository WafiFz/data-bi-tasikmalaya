import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import { DefaultExtensionType, defaultStyles, FileIcon } from 'react-file-icon'

interface CardFileProps {
  title: string
  extension: DefaultExtensionType
  href: string
}

const CardFileDetail: React.FC<CardFileProps> = ({
  title,
  extension,
  href
}) => {
  return (
    <Link href={href} passHref>
      <div className="flex flex-wrap h-full transition duration-300 ease-in-out  hover:border hover:border-blue shrink">
        <CardContent className="flex items-center gap-3">
          <div className="size-12">
            <FileIcon extension={extension} {...defaultStyles[extension]} />
          </div>

          <Typography component="div">{title}</Typography>
        </CardContent>
      </div>
    </Link>
  )
}

export default CardFileDetail
