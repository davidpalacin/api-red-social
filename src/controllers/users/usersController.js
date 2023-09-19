import { usersList } from '../../fakedata/users.js'

export const usersController = {}

usersController.getAllUsers = async (req, res) => {
  console.log(req)
  res.json({
    message: `Hello ${req.user.name}`,
    usersList
  })
}
