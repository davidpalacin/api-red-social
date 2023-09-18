import { Router } from 'express'
import { usersController } from '../controllers/users/usersController.js'
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware.js'

export const usersRouter = Router()

usersRouter.get('/', authTokenMiddleware, usersController.getAllUsers)
