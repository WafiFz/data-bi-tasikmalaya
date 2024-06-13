import getRandomColor from '@core/utils/get-random-color-hex'
import React from 'react'
import Chart from './Chart'

interface DataItem {
  name: string
  type: string
  data: number[]
  unit?: string
}

interface ShowChartProps {
  title: string
  chartData: {
    series: DataItem[]
    labels: string[]
  }
}

const ShowChart: React.FC<ShowChartProps> = ({ chartData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {chartData.series.map((series, index) => (
        <div key={index} className="bg-white p-4 rounded shadow-md">
          <Chart
            title={series.name}
            chartData={{
              series: [series],
              labels: chartData.labels
            }}
            colors={[getRandomColor()]}
            unit={series.unit}
          />
        </div>
      ))}
    </div>
  )
}

export default ShowChart
