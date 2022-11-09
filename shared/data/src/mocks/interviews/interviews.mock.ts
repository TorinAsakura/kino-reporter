import { faker }     from '@faker-js/faker/locale/ru'

import { Interview } from './interviews.interface'

const interviewsMock: Interview[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  title: 'Интервью',
  description: faker.lorem.lines(),
  date: faker.date.between('2022-01-01T00:00:00.000Z', '2022-09-01T00:00:00.000Z'),
  image: {
    imageUrl: faker.image.abstract(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}))

export { interviewsMock }
