import Loader from '@core/components/ux/Loader'
import { INews } from '@core/interfaces/insight/news.interface'
import { IWordCloudToken } from '@core/interfaces/insight/wordCloudToken.interface'

// import { insightDataExample } from '@core/server/v1/insight/data/dataInsightExample'
import Box from '@mui/material/Box'
import { useInsight } from '@server/v1/insight/insight.hook'
import HeroSection from '@views/insight/HeroSection'
import NewsView from '@views/insight/News'
import PredictionView from '@views/insight/Prediction'
import SentimentAnalysisView from '@views/insight/SentimentAnalysis'
import SummariesView from '@views/insight/Summaries'
import React from 'react'

const InsightPage: React.FC = () => {
  const { insightData, handleSearch, isLoading } = useInsight()

  const searchKeyword = new URLSearchParams(window.location.search).get('q')

  const LI: any = insightData

  // const LI = insightDataExample

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

  const allSummary: string = LI.allNews.summary
  const positiveSummary: string = LI.positiveNews.summary
  const negativeSummary: string = LI.negativeNews.summary
  const neutralSummary: string = LI.neutralNews.summary

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

          <Box mt={10}>
            <SummariesView
              allSummary={allSummary}
              positiveSummary={positiveSummary}
              negativeSummary={negativeSummary}
              neutralSummary={neutralSummary}
            />
          </Box>

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
