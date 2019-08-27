const express = require('express');
const router = express.Router();

const PortfoliosCtrl = require('../controllers/portfolios');
const AuthCtrl = require('../controllers/auth')

router.get('', PortfoliosCtrl.getPortfolios);
router.get('/secret', AuthCtrl.onlyAuthUser, PortfoliosCtrl.getSecret);
router.get('/:id', PortfoliosCtrl.getPortfolioById);

router.post('', AuthCtrl.onlyAuthUser, PortfoliosCtrl.createPortfolio);
router.post('/:id/join', AuthCtrl.onlyAuthUser, PortfoliosCtrl.joinPortfolio);
router.post('/:id/leave', AuthCtrl.onlyAuthUser, PortfoliosCtrl.leavePortfolio);

router.patch('/:id', AuthCtrl.onlyAuthUser, PortfoliosCtrl.updatePortfolio)

module.exports = router;
