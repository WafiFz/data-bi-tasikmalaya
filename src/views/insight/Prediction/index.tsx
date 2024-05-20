import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import React from 'react'
import Chart from './Chart'

const PredictionView: React.FC = () => {
  return (
    <>
      <TitleH5 title="Prediksi" textAlignCenter={true}></TitleH5>

      <Chart />
    </>
  )
}

export default PredictionView
