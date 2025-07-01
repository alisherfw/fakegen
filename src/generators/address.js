import { faker } from '@faker-js/faker';

export default function generateAddress() {
  return {
    country: faker.location.country(),
    city: faker.location.city(),
    street: faker.location.streetAddress(),
    postalCode: faker.location.zipCode(),
    latitude: faker.location.latitude(),
    longitude: faker.location.longitude()
  };
}
