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
import { useInflationData } from '@core/server/v1/prediction/inflation/inflation.hook'

const Chart = () => {

  const inflationData = useInflationData();

  const { labels, series, dashArray, title, width } = inflationData;

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
      },
      min: -2,
      max: 5
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y: number) {
          if (typeof y !== 'undefined' && y !== null) {
            return y + ' %'
          }

          
return '';
        }
      }
    },
  }

  return (
    <div>
      <Card>
        <CardHeader
          title={title || "Prediksi"}
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
