// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Icons Imports

// ** Custom Components Imports

// ** Styled Component Import
import ApexChartWrapper from 'src/@core/styles/libs/react-apexcharts'

// ** Demo Components Imports
import { ReactNode } from 'react'
import UserLayoutVertical from 'src/layouts/UserLayoutVertical'
import StatisticsCard from 'src/views/dashboard/StatisticsCard'
import Table from 'src/views/dashboard/Table'

export default function Dashboard() {
  if (typeof window === 'undefined') {
    console.log('window is undefined')

    return <></>
  } else {
    return (
      <ApexChartWrapper>
        <Grid container spacing={6}>

          <Grid item xs={12}>
            <StatisticsCard />
          </Grid>

          <Grid item xs={12}>
            <Table />
          </Grid>
        </Grid>
      </ApexChartWrapper>
    )
  }
}

Dashboard.getLayout = (page: ReactNode) => (
  <UserLayoutVertical>{page}</UserLayoutVertical>
)
