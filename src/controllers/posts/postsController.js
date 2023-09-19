import { postsList } from '../../fakedata/posts.js'

export const postsController = {}

postsController.likePost = async (req, res) => {
  // Retrieve the post that have to be liked and who is giving the like
  const { postId } = req.body
  const user = req.user
  const post = postsList.find(post => post.id === postId)
  if (!user) {
    return res.status(404).json({
      error: 'Unexpected error, no such user'
    })
  }
  console.log(user.name)
  if (!post) {
    return res.status(404).json({
      error: 'Unexpected error, no such post'
    })
  }
  // Control if this like already exists
  const alreadyLiked = post.likes.find(username => username === user.name)
  if (alreadyLiked) {
    return res.status(400).json({
      error: 'You already liked this post.'
    })
  }
  // Simulate we are updating the post in database
  post.likes.push(user.name)
  postsList[post.id - 1] = post

  return res.json({
    post: postsList[post.id - 1]
  })
}
