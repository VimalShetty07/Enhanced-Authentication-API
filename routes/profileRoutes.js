const express = require('express');
const router = express.Router();
const profileController = require('../controllers/profileController');
const { protect, adminProtect } = require('../middlewares/authMiddleware');

router.get('/public', profileController.getPublicProfiles);
router.get('/:id', protect, profileController.getProfileById);

module.exports = router;
