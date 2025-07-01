import { faker } from "@faker-js/faker";

export default function generateProduct() {
    return {
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseFloat(faker.commerce.price({min: 5, max: 1000 })),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.urlPicsumPhotos        
    }
}