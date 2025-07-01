import { faker } from '@faker-js/faker';

export default function generateArticle() {
  return {
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(2),
    publishedAt: faker.date.recent(),
    tags: faker.lorem.words(3).split(' '),
    author: faker.person.fullName()
  };
}