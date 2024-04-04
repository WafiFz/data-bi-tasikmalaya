import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import DotsVerticalIcon from 'mdi-material-ui/DotsVertical'
import { useTheme } from '@mui/material/styles'
import ReactApexcharts from 'react-apexcharts'

const MultiLineChart = () => {
  const theme = useTheme()

  const options = {
    chart: {
      parentHeightOffset: 0,
      toolbar: { show: false }
    },
    stroke: {
      width: 2,
      curve: 'smooth' as const
    },
    markers: {
      size: 0
    },
    legend: {
      show: true
    },
    xaxis: {
      categories: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
    }
  }

  const series = [
    {
      name: 'Series 1',
      data: [30, 40, 35, 100, 49, 60, 70]
    },
    {
      name: 'Series 2',
      data: [40, 35, 30, 45, 50, 60, 65]
    },
    {
      name: 'Series 3',
      data: [50, 45, 40, 55, 60, 70, 75]
    }
  ]

  return (
    <Card>
      <CardHeader
        title="Multi Line Chart"
        action={
          <IconButton aria-label="settings">
            <DotsVerticalIcon />
          </IconButton>
        }
      />
      <CardContent>
        <ReactApexcharts
          type="line"
          height={300}
          options={options}
          series={series}
        />
      </CardContent>
    </Card>
  )
}

export default MultiLineChart
