import Express from 'express'
import { configDotenv } from 'dotenv'
import cors from 'cors'

configDotenv()

const app = Express()
app.use(cors())
app.use(Express.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.json('Hola mundo!')
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
