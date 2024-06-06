import Grid from '@mui/material/Grid'
import FormCreateData from '@views/admin/data/create/FormCreateData'
import React from 'react'

const CreateData: React.FC = () => {
  
  return (
    <>
      <Grid item xs={12}>
        <FormCreateData />
      </Grid>
    </>
  )
}

export default CreateData