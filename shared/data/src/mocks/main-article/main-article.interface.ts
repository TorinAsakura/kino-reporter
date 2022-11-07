export interface MainArticle {
  id: string
  date: Date
  title: string
  description: string
  image: {
    imageUrl: string
    altText: string
  }
}
