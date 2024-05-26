const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: String,
    phone: String,
    photo: String,
    profileVisibility: { type: String, enum: ['public', 'private'], default: 'public' },
    role: { type: String, enum: ['user', 'admin'], default: 'user' },
    googleId: String,
    facebookId: String,
    twitterId: String,
    githubId: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
