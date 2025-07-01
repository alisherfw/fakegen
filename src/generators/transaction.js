import { faker } from "@faker-js/faker";

export default function generateTransaction() {
    return {
        id: faker.string.uuid(),
        amount: parseFloat(faker.finance.amount({ min: 10, max: 10000 })),
        currency: faker.finance.currencyCode(),
        sender: faker.finance.accountName(),
        receiver: faker.finance.accountName(),
        status: faker.helpers.arrayElement(['pending', 'completed', 'failed']),
        timestamp: faker.date.recent()
    }
}