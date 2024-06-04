import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Grid from '@mui/material/Grid'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DotsVertical from 'mdi-material-ui/DotsVertical'
import NoteAddIcon from '@mui/icons-material/NoteAdd'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

const HeroSection = () => {
  return (
    <Card>
      <CardHeader
        title="Pengelolaan Dataset"
        action={
          <IconButton
            size="small"
            aria-label="settings"
            className="card-more-options"
            sx={{ color: 'text.secondary' }}
          >
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <Typography variant="body2">
            <Box
              component="span"
              sx={{ fontWeight: 600, color: 'text.primary' }}
            ></Box>{' '}
          </Typography>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />

      <CardContent sx={{ pt: (theme) => `${theme.spacing(3)} !important` }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item>
            <Button href="/admin/data/create" variant="contained" startIcon={<NoteAddIcon />}>
              Tambah
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default HeroSection
