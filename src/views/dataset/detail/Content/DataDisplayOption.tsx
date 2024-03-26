import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import React, { useState } from 'react'
import { FormattedMessage } from 'react-intl'

const DataDisplayOption: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState('table')

  const handleOptionChange = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string
  ) => {
    if (newOption !== null) {
      setSelectedOption(newOption)
    }
  }

  return (
    <ToggleButtonGroup
      value={selectedOption}
      exclusive
      onChange={handleOptionChange}
      aria-label="Data display options"
      color="primary"
    >
      <ToggleButton value="table" aria-label="table">
        <FormattedMessage id="dataset.detail.table" defaultMessage="Table" />
      </ToggleButton>
      <ToggleButton value="raw_data" aria-label="raw_data">
        <FormattedMessage
          id="dataset.detail.raw_data"
          defaultMessage="Raw Data"
        />
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export default DataDisplayOption
