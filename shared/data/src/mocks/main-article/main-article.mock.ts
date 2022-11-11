import { faker }         from '@faker-js/faker/locale/ru'

import { MainArticle }   from './main-article.interface'
import { getRandomItem } from '../../helpers'

const titles = ['Культура', 'Новости', 'Кино', 'Подборка']

const mainArticleMock: MainArticle = {
  id: faker.datatype.uuid(),
  title: getRandomItem(titles) as string,
  description: faker.lorem.lines(1),
  date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z'),
  image: {
    imageUrl: faker.image.abstract(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}

export { mainArticleMock }
