import { faker } from "@faker-js/faker";

export default function resolveFakerPath(path) {
    try {

        const parts = path.split('.')
        let value = faker;
        for(let part of parts) {
            value = value[part];
        }

        return typeof value === 'function' ? value() : value;
        
    } catch (error) {
        return null;
    }
}