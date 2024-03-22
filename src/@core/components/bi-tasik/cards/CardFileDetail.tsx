import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'

interface CardFileProps {
  title: string
  icon: React.ReactNode
  href: string
}

const CardFileDetail: React.FC<CardFileProps> = ({ title, icon, href }) => {
  return (
    <Link href={href} passHref>
      <div className="flex flex-wrap h-full transition duration-300 ease-in-out  hover:border hover:border-blue shrink">
        <CardContent className="flex items-center gap-3">
          {icon}

          <Typography component="div">{title}</Typography>
        </CardContent>
      </div>
    </Link>
  )
}

export default CardFileDetail
