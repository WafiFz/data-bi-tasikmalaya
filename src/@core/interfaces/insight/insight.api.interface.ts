import { INews } from '@core/interfaces/insight/news.interface'
import { IWordCloudToken } from '@core/interfaces/insight/wordCloudToken.interface'
import { InsightInterface } from './insight.interface'

export interface InsightApiInterface {
  allNews: InsightInterface
  positiveNews: InsightInterface
  negativeNews: InsightInterface
  neutralNews: InsightInterface
}
