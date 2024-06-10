// ** React Imports
import { useRouter } from 'next/router'
import { useState } from 'react'

// ** MUI Imports
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Divider from '@mui/material/Divider'
import Grid from '@mui/material/Grid'
import TextField from '@mui/material/TextField'
import Typography from '@mui/material/Typography'

// ** Third Party Imports
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'
import { useCreateDataset } from '@core/server/v1/dataset/dataset.hook'
import { titleToSlug } from '@core/utils/title-to-slug'
import { JsonEditor } from 'json-edit-react'
import { toast } from 'react-toastify'

const FormCreateData = () => {
  const router = useRouter()
  const { createDataset } = useCreateDataset()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [source, setSource] = useState('')
  const [content, setData] = useState({ columns: [] as any[] })
  const [loading, setLoading] = useState(false)
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [sourceError, setSourceError] = useState(false)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    if (title === '') {
      setTitleError(true)
    }

    if (description === '') {
      setDescriptionError(true)
    }

    if (source === '') {
      setSourceError(true)
    }

    if (title !== '' && description !== '' && source !== '') {
      try {
        const createDatasetDto: ICreateDataset = {
          title,
          description,
          source,
          content: { ...content, rows: [] },
          slug: titleToSlug(title)
        }

        await createDataset(createDatasetDto)

        toast.success('Dataset berhasil dibuat!')

        router.push('/admin/data')
      } catch (error: any) {
        toast.error('Gagal membuat dataset: ', error.message)
      } finally {
        setLoading(false)
      }
    }
  }

  return (
    <Card>
      <CardHeader
        title="Unggah Dataset"
        titleTypographyProps={{ variant: 'h6' }}
      />

      <Divider sx={{ margin: 0 }} />

      <form onSubmit={handleSubmit}>
        <CardContent>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                1. Informasi Dataset
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Judul"
                placeholder="Judul dari dataset"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                error={titleError}
                helperText={titleError ? 'Judul harus diisi' : ''}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sumber"
                placeholder="Sumber dataset"
                value={source}
                onChange={(e) => setSource(e.target.value)}
                required
                error={sourceError}
                helperText={sourceError ? 'Sumber harus diisi' : ''}
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Deskripsi"
                placeholder="Deskripsi dataset"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                error={descriptionError}
                helperText={descriptionError ? 'Deskripsi harus diisi' : ''}
                multiline
                rows={5}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                2. Struktur Kolom
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <JsonEditor
                data={content}

                // @ts-ignore
                onUpdate={(state) => setData(state.newData)}
              />
            </Grid>
          </Grid>
        </CardContent>

        <Divider sx={{ margin: 0 }} />

        <CardActions>
          <Button
            size="large"
            type="submit"
            sx={{ mr: 2 }}
            variant="contained"
            disabled={loading}
          >
            {loading ? 'Mengunggah...' : 'Submit'}
          </Button>

          <Button size="large" color="secondary" variant="outlined">
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormCreateData
