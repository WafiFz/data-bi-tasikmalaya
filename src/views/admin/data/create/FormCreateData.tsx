// ** React Imports
import { ChangeEvent, forwardRef, MouseEvent, useState } from 'react'

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
import { toast } from 'react-toastify';
import { useCreateDataset } from '@core/server/v1/dataset/dataset.hook'
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'

const FormCreateData = () => {
  const { createDataset, datasets } = useCreateDataset();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [source, setSource] = useState('');
  const [content, setData] = useState({});
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);

    try {
      const createDatasetDto : ICreateDataset = {
        title,
        description,
        source,
        content,
        slug: title
      };

      console.log("createDatasetDto:    ", createDatasetDto)

      // await createDataset(createDatasetDto);
      toast.success('Dataset berhasil dibuat!');
    } catch (error: any) {
      toast.error('Gagal membuat dataset: ', error.message);
    } finally {
      setLoading(false);
    }
  };

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
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Deskripsi"
                placeholder="Deskripsi dataset"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Sumber"
                placeholder="Sumber dataset"
                value={source}
                onChange={(e) => setSource(e.target.value)}
              />
            </Grid>

            <Grid item xs={12}>
              <Divider sx={{ marginBottom: 0 }} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="body2" sx={{ fontWeight: 600 }}>
                2. Isi Dataset
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <JsonEditor
                data={content}
                onUpdate={(newData) => setData(newData)}
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
            {loading? 'Mengunggah...' : 'Submit'}
          </Button>

          <Button size="large" color="secondary" variant="outlined">
            Cancel
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default FormCreateData;
