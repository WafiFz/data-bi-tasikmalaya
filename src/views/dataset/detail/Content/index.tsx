import React, { useState } from 'react'
import DataTable from './DataTable'
import DisplayModeSelector from './DisplayModeSelector'
import RawData from './RawData'

const Content: React.FC = () => {
  const [displayMode, setDisplayMode] = useState('table')

  const handleDisplayModeChange = (mode: string) => {
    setDisplayMode(mode)
  }

  const displayModes = [
    { value: 'table', label: 'dataset.detail.table' },
    { value: 'raw_data', label: 'dataset.detail.raw_data' }
  ]

  return (
    <div className="mt-6">
      <DisplayModeSelector
        displayModes={displayModes}
        onDisplayModeChange={handleDisplayModeChange}
      />

      {displayMode === 'table' ? <DataTable /> : <RawData />}
    </div>
  )
}

export default Content
