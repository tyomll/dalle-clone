import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect'
import postRoutes from './routes/postRoutes'
import dalleRoutes from './routes/dalleRoutes'

dotenv.config()

const app = express()
app.use(cors())
app.use(express.json({ limit: '50mb' }))

app.use('/api/v1/post', postRoutes)
app.use('/api/v1/dalle', dalleRoutes)

app.get('/', async (req, res) => {
  res.send('Helloo from dall-e')
})

const startServer = async () => {
  try {
    connectDB(process.env.MONGODB_URL)
    app.listen(8080, () => console.log('servery start exav 8080 porti vra'))
  } catch (error) {
    console.log(error)
  }
}

startServer()
