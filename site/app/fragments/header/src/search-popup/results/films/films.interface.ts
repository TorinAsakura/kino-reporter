export interface Film {
  id: string
  genre: string
  title: string
  country: string
  rating: string
  creationDate: Date
  image: {
    imageUrl: string
    altText: string
  }
}

export interface FilmsProps {
  filteredFilms: Film[]
}
