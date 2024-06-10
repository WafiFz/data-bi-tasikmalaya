import { IDataset } from '@core/interfaces/dataset'
import { convertDataToChart } from '@core/server/v1/dataset/dataset.util'
import React, { useState } from 'react'
import Chart from './Chart'
import DataTable from './DataTable'
import { displayModes } from './displayModes.variable'
import DisplayModeSelector from './DisplayModeSelector'

interface Props {
  dataset: IDataset
}

const Content: React.FC<Props> = ({ dataset }) => {
  const [displayMode, setDisplayMode] = useState('chart')
  const chartData = convertDataToChart(dataset)

  const handleDisplayModeChange = (mode: string) => {
    setDisplayMode(mode)
  }

  let content: JSX.Element

  if (displayMode === 'chart') {
    content = <Chart title={dataset.title} chartData={chartData} />
  } else if (displayMode === 'table') {
    content = (
      <DataTable
        title={dataset.title}
        columns={dataset.content.columns}
        rows={dataset.content.rows}
        columnGroupingModel={dataset.content.columnGroupingModel}
      />
    )
  }

  // else if (displayMode === 'raw_data') {
  //   content = <RawData dataset={dataset} />
  // }
  else {
    content = <div>No content available</div>
  }

  return (
    <div className="mt-6">
      <DisplayModeSelector
        displayModes={displayModes}
        onDisplayModeChange={handleDisplayModeChange}
      />

      <div className="mt-6">{content}</div>
    </div>
  )
}

export default Content
