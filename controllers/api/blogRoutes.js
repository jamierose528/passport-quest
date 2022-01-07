const router = require('express').Router();
const { Blog, Trip} = require('../../models');
// const withAuth = require('../../utils/auth');

//Get all bloggers/users
router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        include: [{ model: Blog },{ model: Trip }],
      });
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Get single blogger/user
router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [{ model: Blog },{ model: Trip }],
      });
  
      if (!blogData) {
        res.status(404).json({ message: 'No blog found with that id!' });
        return;
      }
  
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
});

//Create a blog post
router.post('/', async (req, res) => {
    try {
      const blogData = await Blog.create({
        blog_id: req.body.blog_id,
      });
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;