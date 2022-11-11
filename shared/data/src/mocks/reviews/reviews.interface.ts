export interface Review {
  id: string
  date: Date
  title: string
  author: string
  image: {
    imageUrl: string
    altText: string
  }
}
