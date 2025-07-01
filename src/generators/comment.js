import { faker } from "@faker-js/faker";

export default function generateComment() {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(),
        content: faker.lorem.sentences({ min: 1, max: 3 }),
        createdAt: faker.date.past()
    }
}