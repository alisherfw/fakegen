import express from 'express'
import userGenerator from '../generators/user.js'
import resolveSchema from '../generators/dynamicSchema.js'

const router = express.Router();

router.post('/', (req, res) => {
    const { type, count = 10, schema } = req.body;

    let generator;

    if(schema) {
        generator = () => resolveSchema(schema);
    } else {
        switch(type) {
            case 'user': 
                generator = userGenerator;
                break;
            default: 
                return res.status(400).json({ error: 'Unknown type or missing schema' });
        }
    }

    const result = Array.from({ length: count }, () => generator());
    res.json(result);

})

export default router;