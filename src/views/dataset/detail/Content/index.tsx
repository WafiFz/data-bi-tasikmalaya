import React, { useState } from 'react'
import DataTable from './DataTable'
import { displayModes } from './displayModes.variable'
import DisplayModeSelector from './DisplayModeSelector'
import Chart from './Chart'
import RawData from './RawData'

const Content: React.FC = () => {
  const [displayMode, setDisplayMode] = useState('chart')

  const handleDisplayModeChange = (mode: string) => {
    setDisplayMode(mode)
  }

  let content: JSX.Element

  if (displayMode === 'chart') {
    content = <Chart />
  } else if (displayMode === 'table') {
    content = <DataTable />
  } else if (displayMode === 'raw_data') {
    content = <RawData />
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
