const router = require('express').Router();
const { Blog, Food, Packing, Trip} = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const foodData = await Food.findAll({
        include: [{ model: Food }],
      });
      res.status(200).json(foodData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  router.get('/:id', async (req, res) => {
    try {
      const foodData = await Food.findByPk(req.params.id, {
        include: [{ model: Food}],
      });
  
      if (!foodData) {
        res.status(404).json({ message: 'No food found with that id!' });
        return;
      }
  
      res.status(200).json(foodData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const foodData = await Food.create({
        food_id: req.body.food_id,
      });
      res.status(200).json(foodData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;