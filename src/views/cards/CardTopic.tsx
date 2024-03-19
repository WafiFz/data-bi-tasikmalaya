import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'; // Import Link dari Next.js

interface CardTopicProps {
  title: string
  icon: React.ReactNode
  href: string
}

const CardTopic: React.FC<CardTopicProps> = ({ title, icon, href }) => {
  return (
    <Link href={href} passHref>
      <Card className="flex flex-wrap h-full border-2 transition duration-300 ease-in-out hover:scale-105 hover:border-blue shrink">
        <CardContent className="flex items-center gap-3">
          {icon}

          <Typography component="div">{title}</Typography>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardTopic
