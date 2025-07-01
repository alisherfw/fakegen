import resolveFakerPath from '../utils/fakeResolver.js'

export default function resolveSchema(schemaObj) {
    const result = {}

    for(const key in schemaObj) {
        const path = schemaObj[key];
        result[key] = resolveFakerPath(path);
    }

    return result;

}