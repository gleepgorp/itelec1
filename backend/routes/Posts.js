const express = require('express')
const router = express.Router()
const { Posts } = require('../models')

// get
router.get('/', async (req, res) => {
  const posts = await Posts.findAll()
  res.json(posts)
})


// post
router.post('/', async (req, res) => {
  const post = req.body
  await Posts.create(post)
  res.json(post)
})

module.exports = router

