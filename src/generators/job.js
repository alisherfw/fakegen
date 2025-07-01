import { faker } from '@faker-js/faker';

export default function generateJob() {
  return {
    title: faker.person.jobTitle(),
    department: faker.commerce.department(),
    company: faker.company.name(),
    salary: `$${faker.number.int({ min: 40000, max: 150000 })}`,
    remote: faker.datatype.boolean()
  };
}