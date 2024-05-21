import { InsightInterface } from '@core/interfaces/insight/insight.interface'
import { INews } from '@core/interfaces/insight/news.interface'
import { IWordCloudToken } from '@core/interfaces/insight/wordCloudToken.interface'
import HeroSection from '@views/insight/HeroSection'
import NewsView from '@views/insight/News'
import SentimentAnalysisView from '@views/insight/SentimentAnalysis'
import React, { useEffect } from 'react'
import { useInsight } from '@server/v1/insight/insight.hook'
import { handleSearchFromURL } from '@core/utils/handleSearchFromURL'
import Loader from '@core/components/ux/Loader'
import PredictionView from '@views/insight/Prediction'
import Box from '@mui/material/Box'
import { insightDataExample } from './dataInsightExample'

const InsightPage: React.FC = () => {
  const { insightData, handleSearch, isLoading } = useInsight()

  const searchKeyword = new URLSearchParams(window.location.search).get('q')

  // const LI = insightData
  const LI = insightDataExample

  if (!LI) {
    // Handle jika insightData adalah null
    return (
      <>
        <HeroSection onSearch={handleSearch} />
        {isLoading && <Loader />}
      </>
    )
  }

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
      <HeroSection onSearch={handleSearch} />
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <NewsView
            allNews={allNews}
            positiveNews={positiveNews}
            negativeNews={negativeNews}
            neutralNews={neutralNews}
          />

          <SentimentAnalysisView
            allWordCloud={allWordCloud}
            positiveWordCloud={positiveWordCloud}
            negativeWordCloud={negativeWordCloud}
            neutralWordCloud={neutralWordCloud}
          />

          {searchKeyword && searchKeyword.toLowerCase().includes('inflasi') && (
            <Box mt={18}>
              <PredictionView />
            </Box>
          )}
        </>
      )}
    </>
  )
}

export default InsightPage
