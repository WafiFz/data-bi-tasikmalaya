import HeroSection from '@views/insight/HeroSection'
import SentimentAnalysis from '@views/insight/SentimentAnalysis'
import React from 'react'

const InsightPage: React.FC = () => {
  return (
    <>
      <HeroSection></HeroSection>
      <SentimentAnalysis></SentimentAnalysis>
    </>
  )
}

export default InsightPage
