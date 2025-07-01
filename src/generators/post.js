import { faker } from '@faker-js/faker';

export default function generatePost() {
  return {
    id: faker.string.uuid(),
    username: faker.internet.username(),
    message: faker.lorem.sentences(2),
    likes: faker.number.int({ min: 0, max: 1000 }),
    createdAt: faker.date.recent().toISOString()
  };
}