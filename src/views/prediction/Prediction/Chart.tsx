// ** MUI Imports
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

import DotsVerticalIcon from 'mdi-material-ui/DotsVertical'

// ** Third Party Imports
import { ApexOptions } from 'apexcharts'

// ** Custom Components Imports
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface DataItem {
  title: string
  dashArray: any[]
  width: any[]
  series: any[]
  labels: any[]
}

interface Props {
  inflationData: DataItem
}

const Chart: React.FC<Props> = ({ inflationData }) => {
  const { labels, series, dashArray, title, width } = inflationData

  // Konfigurasi grafik
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    stroke: {
      width: width,
      curve: 'smooth',
      dashArray: dashArray
    },
    labels: labels,
    markers: {
      size: 0
    },
    xaxis: {
      type: 'datetime'
    },
    yaxis: {
      title: {
        text: 'Persentase'
      }
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== 'undefined' && y !== null) {
            return y + ' %'
          }

          return ''
        }
      }
    },
    colors: ['#007bff', '#ffa07b']
  }

  return (
    <div>
      <Card>
        <CardHeader
          title={title || 'Prediksi'}
          action={
            <IconButton aria-label="settings">
              <DotsVerticalIcon />
            </IconButton>
          }
        />

        <CardContent>
          {series.length > 0 ? (
            <ReactApexcharts
              options={options}
              series={series}
              type="line"
              height={350}
            />
          ) : (
            <Typography>Loading...</Typography>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Chart
