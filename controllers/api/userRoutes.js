const router = require('express').Router();
const { Blog, Food, Packing, Trip, User} = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const userData = await User.findAll({
        include: [{ model: User }],
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id, {
        include: [{ model: User}],
      });
  
      if (!userData) {
        res.status(404).json({ message: 'No user found with that id!' });
        return;
      }
  
      res.status(200).json(userData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const userData = await User.create({
        user_id: req.body.user_id,
      });
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;