import { faker }         from '@faker-js/faker/locale/ru'

import { Article }       from './article.interface'
import { getRandomItem } from '../../helpers'

const titles = ['Культура', 'Новости', 'Кино', 'Жмышенко']

const articlesMock: Article[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  title: getRandomItem(titles) as string,
  description: faker.lorem.lines(),
  date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z'),
  image: {
    imageUrl: faker.image.abstract(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}))

export { articlesMock }
