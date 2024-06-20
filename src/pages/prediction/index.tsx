import Header from '@views/prediction/Header'
import PredictionView from '@views/prediction/Prediction'
import React from 'react'

const PredictionPage: React.FC = () => {
  return (
    <>
      <Header></Header>

      <PredictionView />
    </>
  )
}

export default PredictionPage
