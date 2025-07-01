import express from 'express'

import userGenerator from '../generators/user.js'
import productGenerator from '../generators/product.js'
import commentGenerator from '../generators/comment.js'
import transactionGenerator from '../generators/transaction.js'
import bookGenerator from '../generators/book.js'
import addressGenerator from '../generators/address.js'
import articleGenerator from '../generators/article.js'
import companyGenerator from '../generators/company.js'
import jobGenerator from '../generators/job.js'
import postGenerator from '../generators/post.js'

import resolveSchema from '../generators/dynamicSchema.js'

const router = express.Router();

const generators = {
    user: userGenerator,
    product: productGenerator,
    transaction: transactionGenerator,
    comment: commentGenerator,
    book: bookGenerator,
    address: addressGenerator,
    article: articleGenerator,
    company: companyGenerator,
    job: jobGenerator,
    post: postGenerator
}

router.post('/', (req, res) => {

    if (!req.body || typeof req.body !== 'object') {
        return res.status(400).json({
            error: "Missing or invalid JSON body. Did you forget to set Content-Type: application/json?"
        })
    }

    const { type, count = 10, schema } = req.body;



    if (!type && !schema) {
        return res.status(400).json({
            error: "Request must include either 'type' or 'schema'"
        })
    }

    if (typeof count !== 'number' || count <= 0 || count > 1000) {
        return res.status(400).json({
            error: "'count' must be a number between 1 and 1000"
        })
    }

    let generator;

    if (schema) {
        generator = () => resolveSchema(schema);
    } else {
        generator = generators[type];
        if (!generator) {
            return res.status(400).json({ error: `Unknown type: ${type}` });
        }
    }

    const result = Array.from({ length: count }, () => generator());
    res.json(result);

})

router.post('/:type', (req, res) => {

    const { type } = req.params;
    const count = (req.body && typeof req.body.count === 'number') ? req.body.count : 10;


    const generator = generators[type];

    if (!generator) {
        return res.status(400).json({ error: `Unknown type: ${type}` })
    }

    const result = Array.from({ length: count }, () => generator());

    res.status(200).json(result);

})

router.get('/types', (req, res) => {
    res.json(Object.keys(generators));
})

export default router;