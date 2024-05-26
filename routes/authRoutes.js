const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');
const passport = require('passport');
const { protect } = require('../middlewares/authMiddleware');

// Ensure Passport strategies are configured
// require('../config/passport');

router.get('/', (req, res) => {
    res.json({ message: 'API is running' });
})

// Standard auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/logout', authController.logout);
// router.get('/me', protect, authController.getProfile);
// router.put('/me', protect, authController.updateProfile);

// // Social Auth routes
// router.get('/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// router.get('/google/callback', passport.authenticate('google', { session: false }), authController.googleAuth);

// router.get('/facebook', passport.authenticate('facebook', { scope: ['email'] }));
// router.get('/facebook/callback', passport.authenticate('facebook', { session: false }), authController.facebookAuth);

// router.get('/twitter', passport.authenticate('twitter'));
// router.get('/twitter/callback', passport.authenticate('twitter', { session: false }), authController.twitterAuth);

// router.get('/github', passport.authenticate('github', { scope: ['user:email'] }));
// router.get('/github/callback', passport.authenticate('github', { session: false }), authController.githubAuth);

module.exports = router;
