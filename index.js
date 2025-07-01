import express from 'express'
import cors from 'cors'
import generateRoute from './src/routes/generate.js'

const app = express();

app.use(cors());
app.use(express.json())

app.use('/generate', generateRoute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`FakeGen running on port ${PORT}`);
})