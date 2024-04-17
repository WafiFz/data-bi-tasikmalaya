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
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'Mei',
        'Jun',
        'Jul',
        'Agu',
        'Sep',
        'Okt',
        'Nov',
        'Des'
      ]
    }
  }

  const series = [
    {
      name: 'Tasikmalaya',
      data: [
        4.19, 4.09, 4.16, 3.49, 3.28, 3.33, 3.44, 2.82, 2.3, 2.43, 2.56, 2.3
      ]
    },
    {
      name: 'Jawa Barat',
      data: [
        3.68, 3.69, 3.91, 3.7, 3.51, 3.09, 3.47, 3.55, 3.17, 3.48, 3.55, 3.54
      ]
    },
    {
      name: 'Nasional',
      data: [
        3.25, 3.18, 3.4, 3.41, 3.23, 2.72, 3.18, 3.2, 2.88, 3.16, 3.23, 3.13
      ]
    },
    {
      name: 'Core Inflation',
      data: [
        2.63, 2.97, 3.16, 2.93, 2.66, 2.57, 2.82, 2.17, 2.02, 1.94, 1.89, 1.73
      ]
    },
    {
      name: 'Volatile Food',
      data: [
        7.66, 6.4, 6.04, 4.65, 4.76, 6.81, 7.08, 5.17, 2.39, 2.98, 4.0, 3.04
      ]
    },
    {
      name: 'Adm. Prices',
      data: [
        7.39, 6.53, 6.48, 4.68, 4.46, 3.4, 2.83, 3.36, 3.29, 3.83, 3.94, 3.84
      ]
    },
    {
      name: 'Inflasi Umum (yoy)',
      data: [
        4.19, 4.09, 4.16, 3.49, 3.28, 3.33, 3.44, 2.82, 2.3, 2.43, 2.56, 2.3
      ]
    }
  ]

  return (
    <Card>
      <CardHeader
        title="Inflasi Bulanan Tahun 2018 - Tasikmalaya"
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
