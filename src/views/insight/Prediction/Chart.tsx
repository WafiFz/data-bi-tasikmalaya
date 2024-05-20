import React, { Component } from 'react'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'

import DotsVerticalIcon from 'mdi-material-ui/DotsVertical'

interface DataItem {
  name: string
  type: string
  data: (number | null)[]
}

interface Props {}

class ApexChart extends Component<Props, any> {
  constructor(props: Props) {
    super(props)

    const originalDataTasikmalaya = [
      1.16, 0.3, 0.03, -0.08, 0.01, 0.55, 0.61, 0.93, -0.2, 0.18, -0.08, 0.13,
      0.82, 1.0, -0.03, -0.42, -0.02, 0.72, 3.6, 1.0, -0.04, 0.22, -0.11, 0.11,
      0.91, 0.71, 0.25, 0.03, 0.29, 0.43, 0.86, 0.66, -0.15, 0.33, 1.08, 2.44,
      -0.3, -0.2, 0.3, 0.29, 0.21, 0.72, 0.52, 0.37, -0.08, 0.59, 0.41, 0.65,
      0.93, -0.31, 0.13, -0.32, 0.44, 0.75, 0.5, -0.32, 0.12, 0.04, 0.28, 0.48,
      0.7, 0.31, 0.03, 0.55, 0.62, 0.53, 0.03, 0.23, 0.24, -0.08, 0.13, 0.51
    ]

    const predictionDataTasikmalaya = [0.56, 0.67, 0.78, 0.89, 2, 1, 0.75, 0.5]

    const combinedLabels = [
      '01/01/2012',
      '02/01/2012',
      '03/01/2012',
      '04/01/2012',
      '05/01/2012',
      '06/01/2012',
      '07/01/2012',
      '08/01/2012',
      '09/01/2012',
      '10/01/2012',
      '11/01/2012',
      '12/01/2012',
      '01/01/2013',
      '02/01/2013',
      '03/01/2013',
      '04/01/2013',
      '05/01/2013',
      '06/01/2013',
      '07/01/2013',
      '08/01/2013',
      '09/01/2013',
      '10/01/2013',
      '11/01/2013',
      '12/01/2013',
      '01/01/2014',
      '02/01/2014',
      '03/01/2014',
      '04/01/2014',
      '05/01/2014',
      '06/01/2014',
      '07/01/2014',
      '08/01/2014',
      '09/01/2014',
      '10/01/2014',
      '11/01/2014',
      '12/01/2014',
      '01/01/2015',
      '02/01/2015',
      '03/01/2015',
      '04/01/2015',
      '05/01/2015',
      '06/01/2015',
      '07/01/2015',
      '08/01/2015',
      '09/01/2015',
      '10/01/2015',
      '11/01/2015',
      '12/01/2015',
      '01/01/2016',
      '02/01/2016',
      '03/01/2016',
      '04/01/2016',
      '05/01/2016',
      '06/01/2016',
      '07/01/2016',
      '08/01/2016',
      '09/01/2016',
      '10/01/2016',
      '11/01/2016',
      '12/01/2016',
      '01/01/2017',
      '02/01/2017',
      '03/01/2017',
      '04/01/2017',
      '05/01/2017',
      '06/01/2017',
      '07/01/2017',
      '08/01/2017',
      '09/01/2017',
      '10/01/2017',
      '11/01/2017',
      '12/01/2017',
      '01/01/2018',
      '02/01/2018',
      '03/01/2018',
      '04/01/2018',
      '05/01/2018',
      '06/01/2018',
      '07/01/2018',
      '08/01/2018',
    ]

    this.state = {
      series: [
        {
          name: 'Tasikmalaya',
          type: 'line',
          data: [
            ...originalDataTasikmalaya,
            ...Array(predictionDataTasikmalaya.length).fill(null)
          ]
        },
        {
          name: 'Jawa Barat',
          type: 'area',
          data:  [
            ...originalDataTasikmalaya,
            ...Array(predictionDataTasikmalaya.length).fill(null)
          ]
        },
        {
          name: 'Prediksi Tasikmalaya',
          type: 'line',
          data: [
            ...Array(originalDataTasikmalaya.length).fill(null),
            ...predictionDataTasikmalaya
          ]
        }
      ],
      options: {
        chart: {
          height: 350,
          type: 'line',
          stacked: false
        },
        stroke: {
          width: [2, 2, 2],
          curve: 'smooth',
          dashArray: [0, 5, 5]
        },
        labels: combinedLabels,
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
            }
          }
        }
      }
    }
  }

  render() {
    return (
      <div>
        <Card>
          <CardHeader
            title="Inflasi MTM - Tasikmalaya"
            action={
              <IconButton aria-label="settings">
                <DotsVerticalIcon />
              </IconButton>
            }
          />
          <CardContent>
            <ReactApexcharts
              options={this.state.options}
              series={this.state.series}
              type="line"
              height={350}
            />
          </CardContent>
        </Card>
      </div>
    )
  }
}

export default ApexChart
