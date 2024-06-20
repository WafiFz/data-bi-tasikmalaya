import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import DisplayModeSelector from '@core/components/ux/DisplayModeSelector'
import Box from '@mui/material/Box'
import React, { useState } from 'react'
import { summaryDisplayModes } from './summaryDisplayModes.variable'
import Markdown from 'react-markdown'

interface SummariesViewProps {
  allSummary: string
  positiveSummary: string
  negativeSummary: string
  neutralSummary: string
}

const SummariesView: React.FC<SummariesViewProps> = ({
  allSummary,
  positiveSummary,
  negativeSummary,
  neutralSummary
}) => {
  const [displayModeSummary, setDisplayModeSummary] = useState('allSummary')

  const handleDisplayModeChange = (mode: string) => {
    setDisplayModeSummary(mode)

    console.log('OKK')
  }

  let summary = allSummary

  if (displayModeSummary === 'allSummary') {
    summary = allSummary
  } else if (displayModeSummary === 'positiveSummary') {
    summary = positiveSummary
  } else if (displayModeSummary === 'negativeSummary') {
    summary = negativeSummary
  } else if (displayModeSummary === 'neutralSummary') {
    summary = neutralSummary
  }

  return (
    <>
      <TitleH5 title="Rangkuman Berita" textAlignCenter={true}></TitleH5>

      <DisplayModeSelector
        displayModes={summaryDisplayModes}
        onDisplayModeChange={handleDisplayModeChange}
      />

      <Box mt={10}>
        <Markdown>{summary}</Markdown>
      </Box>
    </>
  )
}

export default SummariesView
