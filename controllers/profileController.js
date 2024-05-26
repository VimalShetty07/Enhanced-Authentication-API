const User = require('../models/User');

exports.getPublicProfiles = async (req, res) => {
    try {
        const users = await User.find({ profileVisibility: 'public' }).select('-password');
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};

exports.getProfileById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });

        if (user.profileVisibility === 'private' && req.user.role !== 'admin') {
            return res.status(403).json({ message: 'Access denied' });
        }

        res.json(user);
    } catch (err) {
        res.status(500).json({ message: 'Server error' });
    }
};
