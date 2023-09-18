import jwt from 'jsonwebtoken'
import { configDotenv } from 'dotenv'

configDotenv()

export const authTokenMiddleware = (req, res, next) => {
  try {
    if (!req.headers.authorization) {
      return res.status(403).send('Access denied, no access token provided.')
    }
    const token = req.headers.authorization.split(' ')[1]
    console.log(token)
    if (!token) return res.status(403).send('Access denied, no access token provided.')

    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY)
    req.user = decoded
    next()
  } catch (err) {
    console.log(err)
    res.status(400).send(err)
  }
}
