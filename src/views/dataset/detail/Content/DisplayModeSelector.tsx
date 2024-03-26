import React, { useState } from 'react'
import { ToggleButton, ToggleButtonGroup } from '@mui/material'
import { FormattedMessage } from 'react-intl'

interface DisplayMode {
  value: string
  label: string
}

interface DisplayModeSelectorProps {
  displayModes: DisplayMode[]
  onDisplayModeChange: (mode: string) => void
}

const DisplayModeSelector: React.FC<DisplayModeSelectorProps> = ({
  displayModes,
  onDisplayModeChange
}) => {
  const [selectedOption, setSelectedOption] = useState(displayModes[0].value)

  const handleOptionChange = (
    event: React.MouseEvent<HTMLElement>,
    newOption: string
  ) => {
    if (newOption !== null) {
      setSelectedOption(newOption)
      onDisplayModeChange(newOption)
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
      {displayModes.map((mode) => (
        <ToggleButton
          key={mode.value}
          value={mode.value}
          aria-label={mode.value}
        >
          <FormattedMessage id={mode.label} defaultMessage={mode.label} />
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  )
}

export default DisplayModeSelector
