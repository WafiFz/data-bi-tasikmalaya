import { InsightInterface } from '@core/interfaces/insight/insight.interface'
import { INews } from '@core/interfaces/insight/news.interface'
import { IWordCloudToken } from '@core/interfaces/insight/wordCloudToken.interface'
import HeroSection from '@views/insight/HeroSection'
import NewsView from '@views/insight/News'
import SentimentAnalysisView from '@views/insight/SentimentAnalysis'
import React from 'react'
import { useInsight } from '@server/v1/insight/insight.hook';


const InsightPage: React.FC = () => {
  const { insightData } = useInsight();

  // if (!insightData) {
  //   return <div>Loading...</div>;
  // }
  
  const LI = insightData
  
  const allNews: INews[] = LI.allNews.news
  const positiveNews: INews[] = LI.positiveNews.news
  const negativeNews: INews[] = LI.negativeNews.news
  const neutralNews: INews[] = LI.neutralNews.news
  
  const allWordCloud: IWordCloudToken[] = LI.allNews.wordCloudTokens
  const positiveWordCloud: IWordCloudToken[] = LI.positiveNews.wordCloudTokens
  const negativeWordCloud: IWordCloudToken[] = LI.negativeNews.wordCloudTokens
  const neutralWordCloud: IWordCloudToken[] = LI.neutralNews.wordCloudTokens
  return (
    <>
      <HeroSection></HeroSection>
      <NewsView
        allNews={allNews}
        positiveNews={positiveNews}
        negativeNews={negativeNews}
        neutralNews={neutralNews}
      ></NewsView>

      <SentimentAnalysisView
        allWordCloud={allWordCloud}
        positiveWordCloud={positiveWordCloud}
        negativeWordCloud={negativeWordCloud}
        neutralWordCloud={neutralWordCloud}
      ></SentimentAnalysisView>
    </>
  )
}

export default InsightPage
