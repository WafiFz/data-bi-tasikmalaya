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
  data: number[]
}

interface Props {
  chartData: {
    series: DataItem[]
    labels: string[]
  }
}

class ApexChart extends Component<Props, any> {
  props: any
  state: any
  constructor(props: Props) {
    super(props)

    this.state = {
      series: props.chartData.series,
      options: {
        chart: {
          height: 1000,
          type: 'line',
          stacked: false
        },
        stroke: {
          width: 2,
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        fill: {
          opacity: 1,
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: props.chartData.labels,
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
          max: 20
        },
        tooltip: {
          shared: true,
          intersect: false,
          y: {
            formatter: function (y: number) {
              if (typeof y!== 'undefined') {
                return y + '<unit>'
              }

              
return y
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
            title={this.props.title}
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