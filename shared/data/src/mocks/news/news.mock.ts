import { faker } from '@faker-js/faker/locale/ru'

import { News }  from './news.interface'

const newsMock: News[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.lines(),
  date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z'),
  image: {
    imageUrl: faker.image.abstract(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}))

export { newsMock }
