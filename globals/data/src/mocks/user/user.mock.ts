import { faker } from '@faker-js/faker/locale/ru'

import { User }  from './user.interface'

const userMock: User = {
  id: faker.datatype.uuid(),
  imageUrl: faker.image.avatar(),
}

export { userMock }
