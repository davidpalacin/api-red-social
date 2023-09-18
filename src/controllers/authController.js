import { usersList } from '../fakedata/users.js'
import jwt from 'jsonwebtoken'

export const authController = {}

authController.login = async (req, res) => {
  // Get body request
  const { username, password } = req.body
  // Find user
  const user = usersList.find(user => user.name === username && user.password === password)

  // Manage error
  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials.'
    })
  }

  // Generate token if user exists
  const token = jwt.sign({ _id: user.id }, process.env.JWTPRIVATEKEY)

  return res.json({
    token
  })
}
