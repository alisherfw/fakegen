import { faker } from '@faker-js/faker';

export default function generateBook() {
  return {
    title: faker.lorem.words(3),
    author: faker.person.fullName(),
    genre: faker.word.noun(),
    publishedYear: faker.date.past({ years: 30 }).getFullYear(),
    isbn: faker.string.uuid()
  };
}

