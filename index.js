import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import generateRoute from './src/routes/generate.js'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

app.use('/generate', generateRoute)

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const frontendPath = path.join(__dirname, 'frontend', 'dist')
console.log('📦 Serving static files from:', frontendPath)

app.use(express.static(frontendPath))

app.use((req, res, next) => {
  const indexPath = path.join(frontendPath, 'index.html')
  console.log('⚡ Serving frontend for:', req.url)
  res.sendFile(indexPath)
})

// Start server
const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
  console.log(`✅ FakeGen running at: http://localhost:${PORT}`)
})
