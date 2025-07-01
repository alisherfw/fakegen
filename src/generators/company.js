import { faker } from '@faker-js/faker';

export default function generateCompany() {
  return {
    name: faker.company.name(),
    industry: faker.company.industry(),
    catchPhrase: faker.company.catchPhrase(),
    website: faker.internet.url(),
    logo: faker.image.urlLoremFlickr({ category: 'business' })
  };
}
