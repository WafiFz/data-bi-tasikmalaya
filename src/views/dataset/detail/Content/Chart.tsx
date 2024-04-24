import React, { Component } from 'react'
import ReactApexcharts from 'src/@core/components/react-apexcharts'

interface DataItem {
  name: string
  type: string
  data: number[]
}

interface Props {}

// interface State {
//   series: DataItem[]
//   options: {
//     chart: {
//       height: number
//       type: string
//       stacked: boolean
//     }
//     stroke: {
//       width: number[]
//       curve: string
//     }
//     plotOptions: {
//       bar: {
//         columnWidth: string
//       }
//     }
//     fill: {
//       opacity: number[]
//       gradient: {
//         inverseColors: boolean
//         shade: string
//         type: string
//         opacityFrom: number
//         opacityTo: number
//         stops: number[]
//       }
//     }
//     labels: string[]
//     markers: {
//       size: number
//     }
//     xaxis: {
//       type: string
//     }
//     yaxis: {
//       title: {
//         text: string
//       }
//       min: number,
//       max: number
//     }
//     tooltip: {
//       shared: boolean
//       intersect: boolean
//       y: {
//         formatter: (y: number) => string
//       }
//     }
//   }
// }

class ApexChart extends Component<Props, any> {
  constructor(props: Props) {
    super(props)

    this.state = {
      series : [
        {
          name: 'Tasikmalaya',
          type: 'column',
          data: [
            1.16, 0.30, 0.03, -0.08, 0.01, 0.55, 0.61, 0.93, -0.20, 0.18, -0.08, 0.13,
            0.82, 1.00, -0.03, -0.42, -0.02, 0.72, 3.60, 1.00, -0.04, 0.22, -0.11, 0.11,
            0.91, 0.71, 0.25, 0.03, 0.29, 0.43, 0.86, 0.66, -0.15, 0.33, 1.08, 2.44,
            -0.30, -0.20, 0.30, 0.29, 0.21, 0.72, 0.52, 0.37, -0.08, 0.59, 0.41, 0.65,
            0.93, -0.31, 0.13, -0.32, 0.44, 0.75, 0.50, -0.32, 0.12, 0.04, 0.28, 0.48,
            0.70, 0.31, 0.03, 0.55, 0.62, 0.53, 0.03, 0.23, 0.24, -0.08, 0.13, 0.51
          ]
        },
        {
          name: 'Jawa Barat',
          type: 'area',
          data: [
            0.79, 0.01, -0.02, 0.15, 0.03, 0.58, 0.94, 1.03, 0.00, 0.02, -0.05, 0.34,
            1.05, 0.79, 0.79, -0.13, 0.19, 1.50, 3.87, 1.28, -0.71, -0.01, -0.13, 0.38,
            0.98, 0.45, 0.18, -0.32, 0.09, 0.38, 0.86, 0.44, 0.26, 0.32, 1.59, 2.14,
            -0.37, -0.25, 0.21, 0.22, 0.41, 0.51, 0.79, 0.58, -0.18, -0.17, 0.18, 0.79,
            0.59, -0.17, 0.20, -0.37, 0.25, 0.72, 0.47, -0.17, 0.22, 0.09, 0.36, 0.56,
            0.77, 0.36, 0.08, 0.17, 0.45, 0.88, 0.01, -0.09, 0.18, -0.01, 0.21, 0.56
          ]
        },
        {
          name: 'Nasional',
          type: 'line',
          data: [
            0.76, 0.05, 0.07, 0.21, 0.07, 0.62, 0.70, 0.95, 0.01, 0.16, 0.07, 0.54,
            1.03, 0.75, 0.63, -0.10, -0.03, 1.03, 3.29, 1.12, -0.35, 0.09, 0.12, 0.55,
            1.07, 0.26, 0.08, -0.02, -0.02, 0.43, 0.93, 0.47, 0.27, 0.47, 1.50, 2.46,
            -0.24, -0.36, 0.17, 0.36, 0.50, 0.54, 0.93, 0.39, -0.05, -0.08, 0.21, 0.96,
            0.51, -0.09, 0.19, -0.45, 0.24, 0.66, 0.69, -0.02, 0.22, 0.14, 0.47, 0.42,
            0.97, 0.23, -0.02, 0.09, 0.39, 0.69, 0.22, -0.07, 0.00, 0.01, 0.20, 0.71
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
          width: [0, 2, 2],
          curve: 'smooth'
        },
        plotOptions: {
          bar: {
            columnWidth: '50%'
          }
        },
        fill: {
          opacity: [0.85, 0.25, 1],
          gradient: {
            inverseColors: false,
            shade: 'light',
            type: 'vertical',
            opacityFrom: 0.85,
            opacityTo: 0.55,
            stops: [0, 100, 100, 100]
          }
        },
        labels: [
          '01/01/2012', '02/01/2012', '03/01/2012', '04/01/2012', '05/01/2012', '06/01/2012', '07/01/2012', '08/01/2012', '09/01/2012', '10/01/2012', '11/01/2012', '12/01/2012',
          '01/01/2013', '02/01/2013', '03/01/2013', '04/01/2013', '05/01/2013', '06/01/2013', '07/01/2013', '08/01/2013', '09/01/2013', '10/01/2013', '11/01/2013', '12/01/2013',
          '01/01/2014', '02/01/2014', '03/01/2014', '04/01/2014', '05/01/2014', '06/01/2014', '07/01/2014', '08/01/2014', '09/01/2014', '10/01/2014', '11/01/2014', '12/01/2014',
          '01/01/2015', '02/01/2015', '03/01/2015', '04/01/2015', '05/01/2015', '06/01/2015', '07/01/2015', '08/01/2015', '09/01/2015', '10/01/2015', '11/01/2015', '12/01/2015',
          '01/01/2016', '02/01/2016', '03/01/2016', '04/01/2016', '05/01/2016', '06/01/2016', '07/01/2016', '08/01/2016', '09/01/2016', '10/01/2016', '11/01/2016', '12/01/2016',
          '01/01/2017', '02/01/2017', '03/01/2017', '04/01/2017', '05/01/2017', '06/01/2017', '07/01/2017', '08/01/2017', '09/01/2017', '10/01/2017', '11/01/2017', '12/01/2017'
        ],
        
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
              if (typeof y !== 'undefined') {
                return y + ' %'
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
        <div id="chart">
          <ReactApexcharts
            options={this.state.options}
            series={this.state.series}
            type="line"
            height={350}
          />
        </div>
        <div id="html-dist"></div>
      </div>
    )
  }
}

export default ApexChart
