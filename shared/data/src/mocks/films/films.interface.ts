export interface Film {
  id: string
  genre: string
  country: string
  rating: number
  creationDate: Date
  title: string
  image: {
    imageUrl: string
    altText: string
  }
}
