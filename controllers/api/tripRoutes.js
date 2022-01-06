const router = require('express').Router();
const { Blog, Food, Packing, Trip} = require('../../models');
// const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const tripData = await Trip.findAll({
        include: [{ model: Trip }],
      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  router.get('/:id', async (req, res) => {
    try {
      const tripData = await Trip.findByPk(req.params.id, {
        include: [{ model: Trip}],
      });
  
      if (!tripData) {
        res.status(404).json({ message: 'No trip found with that id!' });
        return;
      }
  
      res.status(200).json(tripData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const tripData = await Trip.create({
        trip_id: req.body.trip_id,
      });
      res.status(200).json(tripData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;