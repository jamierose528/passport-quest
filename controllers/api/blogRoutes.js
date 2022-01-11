const router = require('express').Router();
const { Blog, Trip} = require('../../models');
// const withAuth = require('../../utils/auth');

//Create a blog post
router.post('/addblog', async (req, res) => {
  console.log(req.body)
    try {
      const blogData = await Blog.create({
      ...req.body,
      user_id: req.session.user_id
      });
      console.log(blogData)
      res.status(200).json(blogData);
    } catch (err) {
      res.status(400).json(err);
    }
});

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


module.exports = router;