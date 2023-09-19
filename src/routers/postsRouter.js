import { Router } from 'express'
import { authTokenMiddleware } from '../middlewares/authTokenMiddleware.js'
import { postsController } from '../controllers/posts/postsController.js'

export const postsRouter = Router()

postsRouter.patch('/like', authTokenMiddleware, postsController.likePost)
