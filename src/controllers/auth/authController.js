import { usersList } from '../../fakedata/users.js'
import jwt from 'jsonwebtoken'

export const authController = {}

authController.login = async (req, res) => {
  // Get body request
  const { name, password } = req.body
  // Find user
  const user = usersList.find(user => user.name === name && user.password === password)

  // Manage error
  if (!user) {
    return res.status(401).json({
      message: 'Invalid credentials.'
    })
  }

  // Generate token if user exists
  const token = jwt.sign({ id: user.id, name: user.name }, process.env.JWTPRIVATEKEY)

  return res.json({
    token
  })
}
