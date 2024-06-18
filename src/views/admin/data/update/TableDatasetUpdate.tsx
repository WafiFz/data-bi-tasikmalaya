import { useRouter } from 'next/router';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/DeleteOutlined'
import SaveIcon from '@mui/icons-material/Save'
import CancelIcon from '@mui/icons-material/Close'
import CardActions from '@mui/material/CardActions'
import {
  GridRowsProp,
  GridRowModesModel,
  GridRowModes,
  DataGrid,
  GridColDef,
  GridToolbarContainer,
  GridActionsCellItem,
  GridEventListener,
  GridRowId,
  GridRowModel,
  GridRowEditStopReasons,
  GridSlots
} from '@mui/x-data-grid'
import {
  randomCreatedDate,
  randomTraderName,
  randomId,
  randomArrayItem
} from '@mui/x-data-grid-generator'
import { Card, CardContent } from '@mui/material'
import { useState } from 'react'
import { useUpdateDataset } from '@core/server/v1/dataset/dataset.hook'
import { ICreateDataset } from '@core/interfaces/dataset/create.interface'
import { toast } from 'react-toastify'

interface Props {
  columnsDB: any[]
  rowsDB: any[]
  columnGroupingModel?: any[]
}

interface EditToolbarProps {
  setRows: (newRows: (oldRows: GridRowsProp) => GridRowsProp) => void
  setRowModesModel: (
    newModel: (oldModel: GridRowModesModel) => GridRowModesModel
  ) => void
}

function EditToolbar(props: EditToolbarProps) {
  const { setRows, setRowModesModel } = props

  const handleClick = () => {
    const id = randomId()
    setRows((oldRows) => [...oldRows, { id, isNew: true }])
    setRowModesModel((oldModel) => ({
      ...oldModel,
      [id]: { mode: GridRowModes.Edit, fieldToFocus: 'name' }
    }))
  }

  return (
    <GridToolbarContainer>
      <Button color="primary" startIcon={<AddIcon />} onClick={handleClick}>
        Tambah Baris
      </Button>
    </GridToolbarContainer>
  )
}

export default function FullFeaturedCrudGrid({
  columnsDB,
  rowsDB,
  columnGroupingModel
}: Props) {
  const router = useRouter();
  const initialRows: GridRowsProp = rowsDB
  const { updateDataset, dataset } = useUpdateDataset()
  const [rows, setRows] = useState(initialRows)
  const [rowModesModel, setRowModesModel] = useState<GridRowModesModel>({})
  const [loading, setLoading] = useState(false)

  const handleRowEditStop: GridEventListener<'rowEditStop'> = (
    params,
    event
  ) => {
    if (params.reason === GridRowEditStopReasons.rowFocusOut) {
      event.defaultMuiPrevented = true
    }
  }

  const handleEditClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.Edit } })
  }

  const handleSaveClick = (id: GridRowId) => () => {
    setRowModesModel({ ...rowModesModel, [id]: { mode: GridRowModes.View } })
  }

  const handleDeleteClick = (id: GridRowId) => () => {
    setRows(rows.filter((row) => row.id !== id))
  }

  const handleCancelClick = (id: GridRowId) => () => {
    setRowModesModel({
      ...rowModesModel,
      [id]: { mode: GridRowModes.View, ignoreModifications: true }
    })

    const editedRow = rows.find((row) => row.id === id)
    if (editedRow!.isNew) {
      setRows(rows.filter((row) => row.id !== id))
    }
  }

  const processRowUpdate = (newRow: GridRowModel) => {
    const updatedRow = { ...newRow, isNew: false }
    setRows(rows.map((row) => (row.id === newRow.id ? updatedRow : row)))
    return updatedRow
  }

  const handleRowModesModelChange = (newRowModesModel: GridRowModesModel) => {
    setRowModesModel(newRowModesModel)
  }

  const columns: GridColDef[] = [
    ...columnsDB.map((column) => ({ ...column, editable: true })),
    {
      field: 'actions',
      type: 'actions',
      headerName: 'Actions',
      width: 100,
      cellClassName: 'actions',
      getActions: ({ id }) => {
        const isInEditMode = rowModesModel[id]?.mode === GridRowModes.Edit

        if (isInEditMode) {
          return [
            <GridActionsCellItem
              icon={<SaveIcon />}
              label="Save"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleSaveClick(id)}
            />,
            <GridActionsCellItem
              icon={<CancelIcon />}
              label="Cancel"
              className="textPrimary"
              onClick={handleCancelClick(id)}
              color="inherit"
            />
          ]
        } else {
          return [
            <GridActionsCellItem
              icon={<EditIcon />}
              label="Edit"
              sx={{
                color: 'primary.main'
              }}
              onClick={handleEditClick(id)}
            />,
            <GridActionsCellItem
              icon={<DeleteIcon />}
              label="Delete"
              className="textPrimary"
              onClick={handleDeleteClick(id)}
              color="inherit"
            />
          ]
        }
      }
    }
  ]

  const handleSaveTable = () => {

    setLoading(true)

    try {
      updateDataset(dataset._id, {
        title: dataset.title,
        description: dataset.description,
        source: dataset.source,
        slug: dataset.slug,
        content: {
          columnGroupingModel,
          columns: columnsDB,
          rows
        }
      })
     .then(() => {
        toast.success('Dataset berhasil ubah!')
      })
    } catch (error: any) {
      toast.error('Gagal membuat dataset: ', error.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <CardContent>
        <Box
          sx={{
            height: 900,
            width: '100%',
            '& .actions': {
              color: 'text.secondary'
            },
            '& .textPrimary': {
              color: 'text.primary'
            }
          }}
        >
          <DataGrid
            rows={rows}
            columns={columns}
            columnGroupingModel={columnGroupingModel}
            editMode="row"
            rowModesModel={rowModesModel}
            onRowModesModelChange={handleRowModesModelChange}
            onRowEditStop={handleRowEditStop}
            processRowUpdate={processRowUpdate}
            slots={{
              toolbar: EditToolbar as GridSlots['toolbar']
            }}
            slotProps={{
              toolbar: { setRows, setRowModesModel }
            }}
          />
        </Box>
      </CardContent>

      <CardActions>
        <Button
          size="large"
          sx={{ mr: 2 }}
          variant="contained"
          disabled={loading}
          onClick={handleSaveTable}
        >
          {loading ? 'Loading...' : 'Save'}
        </Button>

        <Button
          size="large"
          color="secondary"
          variant="outlined"
          onClick={() => {
            router.push('/admin/data/');
          }}
        >
          Cancel
        </Button>
      </CardActions>
    </Card>
  )
}
