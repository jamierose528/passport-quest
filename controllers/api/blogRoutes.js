const router = require('express').Router();
const { Blog, Food, Packing, Trip} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const blogData = await Blog.findAll({
        include: [{ model: Blog }],
      });
      res.status(200).json(blogData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  router.get('/:id', async (req, res) => {
    try {
      const blogData = await Blog.findByPk(req.params.id, {
        include: [{ model: Blog}],
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

  // CREATE a card
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