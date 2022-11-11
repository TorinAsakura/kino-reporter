export interface News {
  id: string
  date: Date
  title: string
  image: {
    imageUrl: string
    altText: string
  }
}
