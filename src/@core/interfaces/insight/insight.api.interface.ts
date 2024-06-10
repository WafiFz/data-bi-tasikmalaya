import { InsightInterface } from './insight.interface'

export interface InsightApiInterface {
  allNews: InsightInterface
  positiveNews: InsightInterface
  negativeNews: InsightInterface
  neutralNews: InsightInterface
}
