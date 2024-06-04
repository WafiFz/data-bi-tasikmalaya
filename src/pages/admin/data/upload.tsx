import Grid from '@mui/material/Grid'
import FormUploadData from '@views/admin/upload/FormUploadData'
import React from 'react'
import { JsonEditor } from 'json-edit-react'

const UploadData: React.FC = () => {
  
  return (
    <>
      <Grid item xs={12}>
        <FormUploadData />
      </Grid>
    </>
  )
}

export default UploadData
