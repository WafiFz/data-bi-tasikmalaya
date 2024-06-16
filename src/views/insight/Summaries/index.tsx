import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import Box from '@mui/material/Box'
import React from 'react'

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
  return (
    <>
      <TitleH5 title="Rangkuman Berita" textAlignCenter={true}></TitleH5>

      <Box mt={10}>
        <div>{allSummary}</div>
      </Box>
    </>
  )
}

export default SummariesView
