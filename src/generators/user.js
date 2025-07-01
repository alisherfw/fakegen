import { faker } from "@faker-js/faker";

export default function generateUser() {
    return {
        name: faker.person.fullName(),
        email: faker.internet.email(),
        birthdate: faker.date.birthdate(),
        avatar: faker.image.avatar()
    };
}