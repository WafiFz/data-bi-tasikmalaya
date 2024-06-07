import React, { useState } from 'react'
import DataTable from './DataTable'
import { displayModes } from './displayModes.variable'
import DisplayModeSelector from './DisplayModeSelector'
import Chart from './Chart'
import RawData from './RawData'
import { IDataset } from '@core/interfaces/dataset'

interface Props {
  dataset: IDataset
}

const Content: React.FC<Props> = ({ dataset }) => {
  const [displayMode, setDisplayMode] = useState('chart')

  const handleDisplayModeChange = (mode: string) => {
    setDisplayMode(mode)
  }

  let content: JSX.Element

  if (displayMode === 'chart') {
    content = <Chart dataset={dataset} />
  } else if (displayMode === 'table') {
    content = (
      <DataTable
        title={dataset.title}
        columns={dataset.content.columns}
        rows={dataset.content.rows}
        columnGroupingModel={dataset.content.columnGroupingModel}
      />
    )
  } else if (displayMode === 'raw_data') {
    content = <RawData dataset={dataset} />
  } else {
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
