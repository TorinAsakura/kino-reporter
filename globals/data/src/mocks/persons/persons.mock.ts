import { faker }         from '@faker-js/faker/locale/ru'

import { Person }        from './persons.interface'
import { getRandomItem } from '../../helpers'

const professions = ['Актер', 'Актер, режиссер', 'Продюссер', 'Режиссер']

const personsMock: Person[] = [...Array(10)].map(() => ({
  id: faker.datatype.uuid(),
  title: 'Евгений',
  profession: getRandomItem(professions) as string,
  image: {
    imageUrl: faker.image.people(1280, 1280, true),
    altText: faker.lorem.words(),
  },
}))

export { personsMock }
