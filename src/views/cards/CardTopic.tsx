import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import { css } from '@emotion/react'
import Link from 'next/link' // Import Link dari Next.js

interface CardTopicProps {
  title: string
  icon: React.ReactNode
  href: string
}

const CardTopic: React.FC<CardTopicProps> = ({ title, icon, href }) => {
  return (
    <Link href={href} passHref>
      <Card className="transition duration-300 ease-in-out transform border-2 hover:scale-105 hover:border-blue flex flex-wrap shrink h-full">
        <CardContent className="flex gap-3 items-center">
          {icon}
          <Typography component="div">{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardTopic
