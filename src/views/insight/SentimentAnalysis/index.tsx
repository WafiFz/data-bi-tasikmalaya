import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import { IWordCloudToken } from '@core/interfaces/insight/wordCloudToken.interface'
import React from 'react'
import WordCloud from './WordCloud'

interface SentimenAnalysisViewProps {
  allWordCloud: IWordCloudToken[]
  positiveWordCloud: IWordCloudToken[]
  negativeWordCloud: IWordCloudToken[]
  neutralWordCloud: IWordCloudToken[]
}

const SentimentAnalysisView: React.FC<SentimenAnalysisViewProps> = ({
  allWordCloud,
  positiveWordCloud,
  negativeWordCloud,
  neutralWordCloud
}) => {

  return (
    <>
      <TitleH5
        title="Analisis Sentimen Berita"
        textAlignCenter={true}
      ></TitleH5>

      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3`}>
        <WordCloud
          title={'Positif'}
          intlTitle={'title.sentiment_positive'}
          words={positiveWordCloud}
        ></WordCloud>

        <WordCloud
          title={'Negatif'}
          intlTitle={'title.sentiment_negative'}
          words={negativeWordCloud}
        ></WordCloud>

        <WordCloud
          title={'Netral'}
          intlTitle={'title.sentiment_neutral'}
          words={neutralWordCloud}
          className="md:col-span-2 lg:col-span-1"
        ></WordCloud>
      </div>
    </>
  )
}

export default SentimentAnalysisView
