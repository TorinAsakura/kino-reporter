export interface Article {
  id: string
  date: Date
  title: string
  description: string
  image: {
    imageUrl: string
    altText: string
  }
}

export interface ArticlesProps {
  filteredArticles: Article[]
}
