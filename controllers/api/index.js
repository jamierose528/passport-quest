const router = require('express').Router();
const blogRoutes = require('./blogRoutes');
const foodRoutes = require('./foodRoutes');
const packingRoutes = require('./packingRoutes');
const tripRoutes = require('./tripRoutes');
const userRoutes = require('./userRoutes');

router.use('/blog', blogRoutes);
router.use('/food', foodRoutes);
router.use('/packing', packingRoutes);
router.use('/trip', tripRoutes);
router.use('/user', userRoutes);

module.exports = router;