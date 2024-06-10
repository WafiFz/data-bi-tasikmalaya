// ** React Imports
import { useState } from 'react'
import { useRouter } from 'next/router'

// ** MUI Imports
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'
import FormControl from '@mui/material/FormControl'
import OutlinedInput from '@mui/material/OutlinedInput'
import InputAdornment from '@mui/material/InputAdornment'
import Select, { SelectChangeEvent } from '@mui/material/Select'

// ** Third Party Imports
import DatePicker from 'react-datepicker'
import { JsonEditor, LinkCustomNodeDefinition } from 'json-edit-react'
import { toast } from 'react-toastify'
import {
  useCreateDataset,
  useGetDatasetById,
  useGetDatasetBySlug,
  useUpdateDataset
} from '@core/server/v1/dataset/dataset.hook'
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'
import { titleToSlug } from '@core/utils/title-to-slug'
import { useDataset } from '@core/server/v1/dataset/dataset.state'
import { IDataset } from '@core/interfaces/dataset'

const FormUpdateData = () => {
  const router = useRouter()
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