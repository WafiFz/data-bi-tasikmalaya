import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Link from 'next/link'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

interface CardNewsProps {
  link: string
  title: string
  source: string
  date: string
  snippet: string
  thumbnail?: string
}

const CardTopic: React.FC<CardNewsProps> = ({
  link,
  title,
  source,
  date,
  snippet,
  thumbnail
}) => {
  const theme = useTheme()
  const isMdScreen = useMediaQuery(theme.breakpoints.up('md'))

  return (
    <Link href={link} passHref>
      <Card className="flex flex-wrap h-full border-2 transition duration-300 ease-in-out hover:scale-105 hover:border-blue shrink">
        <CardContent className="flex items-center gap-3">
          {thumbnail && (
            <img
              src={thumbnail}
              alt={title}
              className="w-16 h-16 object-cover rounded"
            />
          )}

          <div className="flex flex-col w-full">
            <ListItem>
              <ListItemText
                primary={title}
                secondary={isMdScreen ? snippet : undefined}
                primaryTypographyProps={{ style: { fontSize: '14px' } }}
                secondaryTypographyProps={{ style: { fontSize: '12px' } }}
              />
            </ListItem>

            <div className="flex justify-between px-4">
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ fontSize: '12px' }}
              >
                {source}
              </Typography>
              <Typography
                variant="body2"
                color="textSecondary"
                component="p"
                style={{ fontSize: '12px' }}
              >
                {date}
              </Typography>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}

export default CardTopic
