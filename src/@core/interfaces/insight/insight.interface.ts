import { INews } from '@core/interfaces/insight/news.interface'
import { IWordCloudToken } from '@core/interfaces/insight/wordCloudToken.interface'

export interface InsightInterface {
  news: INews[]
  wordCloudTokens: IWordCloudToken[]
}
