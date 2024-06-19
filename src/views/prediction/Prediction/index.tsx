import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import { useInflationData } from '@core/server/v2/prediction/inflation/inflation.hook'
import React from 'react'
import Chart from './Chart'

const PredictionView: React.FC = () => {
  const inflationDataMTM = useInflationData('mtm')
  const inflationDataYOY = useInflationData('yoy')
  return (
    <>
      <Chart inflationData={inflationDataMTM} />
      <div className="mb-4" />
      <Chart inflationData={inflationDataYOY} />
    </>
  )
}

export default PredictionView
