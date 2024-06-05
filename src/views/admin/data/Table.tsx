// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import DeleteIcon from '@mui/icons-material/Delete'
import AlarmIcon from '@mui/icons-material/Alarm'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart'
import EditIcon from '@mui/icons-material/Edit'
import VisibilityIcon from '@mui/icons-material/Visibility'

// ** Types Imports
import { ThemeColor } from 'src/@core/layouts/types'
import {
  useDeleteDataset,
  useGetDatasets
} from '@core/server/v1/dataset/dataset.hook'
import { useEffect, useState } from 'react'
import { IDataset } from '@core/interfaces/dataset'
import Loader from '@core/components/ux/Loader'
import LoaderWithBox from '@core/components/ux/LoaderWithBox'
import { toast } from 'react-toastify'

const DatasetTable = () => {
  const { getDatasets, datasets, isLoading } = useGetDatasets()
  const { deleteDataset } = useDeleteDataset()
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    getDatasets()
  }, [])

  const handleDelete = async (id: string) => {
    try {
      setIsDeleting(true)
      await deleteDataset(id)
      toast.success('Dataset berhasil dihapus!')
    } catch (error: any) {
      toast.error(error.message)
    } finally {
      setIsDeleting(false)
    }
  }

  return (
    <Card>
      {isDeleting && <LoaderWithBox />}
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label="table in dataset">
          <TableHead>
            <TableRow>
              <TableCell>Nama</TableCell>

              <TableCell>Sumber</TableCell>

              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  <Loader />
                </TableCell>
              </TableRow>
            ) : datasets.length > 0 ? (
              datasets.map((dataset: IDataset) => (
                <TableRow
                  hover
                  key={dataset._id}
                  sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}
                >
                  <TableCell
                    sx={{ py: (theme) => `${theme.spacing(0.5)}!important` }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                      <Typography
                        sx={{ fontWeight: 500, fontSize: '0.875rem!important' }}
                      >
                        {dataset.title}
                      </Typography>
                    </Box>
                  </TableCell>

                  <TableCell>{dataset.source}</TableCell>

                  <TableCell>
                    <IconButton href="/" color="primary" aria-label="view">
                      <VisibilityIcon />
                    </IconButton>
                    <IconButton href="" color="warning" aria-label="edit">
                      <EditIcon />
                    </IconButton>
                    <IconButton
                      color="error"
                      aria-label="delete"
                      onClick={() => handleDelete(dataset._id)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} sx={{ textAlign: 'center' }}>
                  No datasets found
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DatasetTable
