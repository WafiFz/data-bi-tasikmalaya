import React from 'react'
import TitleH5 from '@core/components/bi-tasik/text/TitleH5'
import CardNews from '@core/components/bi-tasik/cards/CardNews'
import { InsightInterface } from '@core/interfaces/insight/insight.interface'
import { INews } from '@core/interfaces/insight/news.interface'

interface NewsViewProps {
  allNews: INews[]
  positiveNews: object
  negativeNews: object
  neutralNews: object
}

const NewsView: React.FC<NewsViewProps> = ({
  allNews,
  positiveNews,
  negativeNews,
  neutralNews
}) => {
  return (
    <>
      <TitleH5 title="Berita" textAlignCenter={true}></TitleH5>

      <div className="my-6 grid grid-cols gap-4 sm:grid-cols-2">
        {allNews.map((news: INews) => (
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
