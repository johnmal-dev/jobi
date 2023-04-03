import { faker } from '@faker-js/faker'
import { push, ref } from 'firebase/database'

import { db } from '../database/firebase'

const CompanyGenerator = (num) => {
  for (let i = 0; i < num; i++) {
    const name = faker.company.name()
    push(ref(db, '/companies'), {
      name: name,
      logo: faker.image.business(200, 200),
      email: `contact@${name}.com`,
      phone: faker.phone.number(),
      location: {
        city: faker.address.cityName(),
        country: faker.address.country(),
      },
      employeeCount: faker.datatype.number({ min: 5, max: 10000 }),
      founded: faker.date.between(
        '1920-01-01T00:00:00.000Z',
        '2022-01-01T00:00:00.000Z'
      ),
    })
  }
}

export { CompanyGenerator }
