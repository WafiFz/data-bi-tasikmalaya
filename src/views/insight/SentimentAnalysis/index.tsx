import WordCloudComponent from '@core/components/bi-tasik/insight/WordCloud'
import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import Typography from '@mui/material/Typography'
import React from 'react'
import { FormattedMessage } from 'react-intl'
import WordCloud from './WordCloud'

const SentimentAnalysis: React.FC = () => {
  const words = [
    { text: 'React', value: 30 },
    { text: 'Next.js', value: 20 },
    { text: 'TypeScript', value: 15 },
    { text: 'JavaScript', value: 25 },
    { text: 'Node.js', value: 10 },
    { text: 'Web Development', value: 20 },
    { text: 'Programming', value: 18 }
    // Tambahkan lebih banyak kata sesuai kebutuhan
  ]
  return (
    <>
      <TitleH5 title="Analisis Sentimen" textAlignCenter={true}></TitleH5>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        <WordCloud
          title={'Positif'}
          intlTitle={'title.sentiment_positive'}
          words={words}
        ></WordCloud>

        <WordCloud
          title={'Negatif'}
          intlTitle={'title.sentiment_negative'}
          words={words}
        ></WordCloud>

        <WordCloud
          title={'Netral'}
          intlTitle={'title.sentiment_neutral'}
          words={words}
          className="md:col-span-2 lg:col-span-1"
        ></WordCloud>
      </div>
    </>
  )
}

export default SentimentAnalysis
