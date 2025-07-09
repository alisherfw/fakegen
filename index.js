import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import generateRoute from './src/routes/generate.js'

const app = express()

// Middleware
app.use(cors())
app.use(express.json())

// API Route
app.use('/generate', generateRoute)

// __dirname for ESM compatibility
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Path to frontend/dist
const frontendPath = path.join(__dirname, 'frontend', 'dist')
console.log('📦 Serving static files from:', frontendPath)

// Serve static assets
app.use(express.static(frontendPath))

// ✅ Fallback route for React (no wildcard string — Node 22 safe)

// ✅ FIXED fallback route
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
