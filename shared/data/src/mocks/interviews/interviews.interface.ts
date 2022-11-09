export interface Interview {
  id: string
  date: Date
  title: string
  description: string
  image: {
    imageUrl: string
    altText: string
  }
}
