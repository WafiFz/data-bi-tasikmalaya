import Grid from '@mui/material/Grid'
import FormCreateData from '@views/admin/data/create/FormCreateData'
import React, { ReactNode } from 'react'
import UserLayoutVertical from 'src/layouts/UserLayoutVertical'

export default function CreateData() {
  
  return (
    <>
      <Grid item xs={12}>
        <FormCreateData />
      </Grid>
    </>
  )
}

CreateData.getLayout = (page: ReactNode) => (
  <UserLayoutVertical>{page}</UserLayoutVertical>
)
