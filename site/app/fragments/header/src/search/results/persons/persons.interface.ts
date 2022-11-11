export interface Person {
  id: string
  title: string
  profession: string
  image: {
    imageUrl: string
    altText: string
  }
}

export interface PersonsProps {
  filteredPersons: Person[]
}
