// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import ArticleIcon from '@mui/icons-material/Article'
import PersonIcon from '@mui/icons-material/Person'
import React from 'react'

interface CardTitleProps {
  title: string | string[] | undefined
  source: string
}

const CardTitle: React.FC<CardTitleProps> = ({title, source}) => {
  return (
    <Card
      sx={{
        border: 0,
        boxShadow: 0,
        color: 'common.white',
        backgroundColor: 'primary.main'
      }}
    >
      <CardContent
        sx={{ padding: (theme) => `${theme.spacing(3.25, 5, 4.5)} !important` }}
      >
        <Typography
          variant="h6"
          sx={{
            display: 'flex',
            marginBottom: 2.75,
            alignItems: 'center',
            color: 'common.white'
          }}
        >
          <ArticleIcon sx={{ marginRight: 2.5 }} />

          {title}
        </Typography>

        <Typography
          variant="body2"
          sx={{ marginBottom: 3, color: 'common.white' }}
        >
          Data terkait inflasi bulanan selama tahun 2018 Tasikmalaya
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between'
          }}
        >
          <Box sx={{ mr: 2, display: 'flex', alignItems: 'center' }}>
            <PersonIcon sx={{ width: 34, height: 34, marginRight: 2.75 }} />

            <Typography variant="body2" sx={{ color: 'common.white' }}>
              {source}
            </Typography>
          </Box>

          {/* <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mr: 3.5 }}>
              <Heart sx={{ marginRight: 1.25 }} />

              <Typography variant="body2" sx={{ color: 'common.white' }}>
                3.2k
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <ShareVariant sx={{ marginRight: 1.25 }} />

              <Typography variant="body2" sx={{ color: 'common.white' }}>
                49
              </Typography>
            </Box>
          </Box> */}
        </Box>
      </CardContent>
    </Card>
  )
}

export default CardTitle
