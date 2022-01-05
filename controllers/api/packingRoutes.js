const router = require('express').Router();
const { Blog, Food, Packing, Trip} = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
      const packingData = await Packing.findAll({
        include: [{ model: Packing }],
      });
      res.status(200).json(packingData);
    } catch (err) {
      res.status(500).json(err);
    }
});

  router.get('/:id', async (req, res) => {
    try {
      const packingData = await Packing.findByPk(req.params.id, {
        include: [{ model: Packing}],
      });
  
      if (!packingData) {
        res.status(404).json({ message: 'No packing found with that id!' });
        return;
      }
  
      res.status(200).json(packingData);
    } catch (err) {
      res.status(500).json(err);
    }
});

router.post('/', async (req, res) => {
    try {
      const packingData = await Packing.create({
        packing_id: req.body.packing_id,
      });
      res.status(200).json(packingData);
    } catch (err) {
      res.status(400).json(err);
    }
});

module.exports = router;