import { faker }  from '@faker-js/faker/locale/ru'

import { Review } from './reviews.interface'

const reviewsMock: Review[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  title: faker.lorem.lines(),
  author: faker.name.fullName(),
  date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z'),
  image: {
    imageUrl: faker.image.abstract(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}))

export { reviewsMock }
