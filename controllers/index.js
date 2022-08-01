const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboradRoutes = require('./dashboard-routes');

router.use('/api', apiRoutes);
router.use('/dashboard', dashboradRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;