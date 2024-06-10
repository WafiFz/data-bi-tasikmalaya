// ** React Imports
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
import {
  useGetDatasetBySlug,
  useUpdateDataset
} from '@core/server/v1/dataset/dataset.hook'
import { useDataset } from '@core/server/v1/dataset/dataset.state'
import { titleToSlug } from '@core/utils/title-to-slug'
import { toast } from 'react-toastify'

const FormUpdateData = () => {
  const { updateDataset, dataset } = useUpdateDataset()
  const { getDatasetBySlug } = useGetDatasetBySlug()
  const { setDatasetState } = useDataset()
  const [loading, setLoading] = useState(false)
  const [titleError, setTitleError] = useState(false)
  const [descriptionError, setDescriptionError] = useState(false)
  const [sourceError, setSourceError] = useState(false)


  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target

    setDatasetState({ ...dataset, [name]: value })
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setLoading(true)

    if (dataset.title === '') {
      setTitleError(true)
    }

    if (dataset.description === '') {
      setDescriptionError(true)
    }

    if (dataset.source === '') {
      setSourceError(true)
    }

    if (
      dataset.title !== '' &&
      dataset.description !== '' &&
      dataset.source !== ''
    ) {
      try {
        const updateDatasetDto: ICreateDataset = {
          title: dataset.title,
          description: dataset.description,
          source: dataset.source,
          content: dataset.content,
          slug: titleToSlug(dataset.title)
        }

        await updateDataset(dataset._id, updateDatasetDto)

        toast.success('Dataset berhasil ubah!')
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
        title="Ubah Dataset"
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
                value={dataset.title}
                onChange={handleInputChange}
                name="title"
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
                value={dataset.source}
                onChange={handleInputChange}
                name="source"
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
                value={dataset.description}
                onChange={handleInputChange}
                name="description"
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
            {loading ? 'Loading...' : 'Save'}
          </Button>

          <Button
            size="large"
            color="secondary"
            variant="outlined"
            onClick={() => {
              getDatasetBySlug(dataset.slug)
            }}
          >
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  )
}

export default FormUpdateData
