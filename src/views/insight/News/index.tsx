import React, { useState } from 'react'
import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import CardNews from '@core/components/bi-tasik/cards/CardNews'
import { InsightInterface } from '@core/interfaces/insight/insight.interface'
import { INews } from '@core/interfaces/insight/news.interface'
import DisplayModeSelector from '@core/components/ux/DisplayModeSelector'
import { newsDisplayModes } from './newsDisplayModes.variable'

interface NewsViewProps {
  allNews: INews[]
  positiveNews: INews[]
  negativeNews: INews[]
  neutralNews: INews[]
}

const NewsView: React.FC<NewsViewProps> = ({
  allNews,
  positiveNews,
  negativeNews,
  neutralNews
}) => {
  const [displayMode, setDisplayMode] = useState('all')

  const handleDisplayModeChange = (mode: string) => {
    setDisplayMode(mode)
  }

  let news: INews[] = []

  if (displayMode === 'all') {
    news = allNews
  } else if (displayMode === 'positive') {
    news = positiveNews
  } else if (displayMode === 'negative') {
    news = negativeNews
  } else if (displayMode === 'neutral') {
    news = neutralNews
  } else {
    news = []
  }

  return (
    <>
      <TitleH5 title="Berita" textAlignCenter={true}></TitleH5>

      <DisplayModeSelector
        displayModes={newsDisplayModes}
        onDisplayModeChange={handleDisplayModeChange}
      />

      <div className="my-6 grid grid-cols gap-4 sm:grid-cols-2">
        {news.map((news: INews) => (
          <CardNews
            key={news.title}
            link={news.link}
            title={news.title}
            source={news.source}
            date={news.date}
            snippet={news.snippet}
            thumbnail={news.thumbnail}
          />
        ))}
      </div>
    </>
  )
}

export default NewsView
