import { faker }         from '@faker-js/faker/locale/ru'

import { Film }          from './films.interface'
import { getRandomItem } from '../../helpers'

const genres = ['Боевик', 'Драма', 'Мультфильм', 'Короткометражка', 'Документальный', 'Фантастика']
const countries = ['Россия', 'Германия', 'США', 'Великобритания', 'Япония']
const ratings = [8.8, 5.3, 7.4, 4, 0, 7.8, 3]

const filmsMock: Film[] = [...Array(50)].map(() => ({
  id: faker.datatype.uuid(),
  genre: getRandomItem(genres) as string,
  title: 'Жмышенко',
  country: getRandomItem(countries) as string,
  rating: getRandomItem(ratings) as number,
  creationDate: faker.date.between('1960-01-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z'),
  image: {
    imageUrl: faker.image.abstract(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}))

export { filmsMock }
