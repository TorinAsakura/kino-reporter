import { Article } from '@shared/data'

export interface IArticle extends Article {}

export interface ArticlesProps {
  filteredArticles: IArticle[]
}
