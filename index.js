const express = require('express');
const mongoose = require('mongoose');
// const passport = require('passport');
const authRoutes = require('./routes/authRoutes');
// const profileRoutes = require('./routes/profileRoutes');
require('dotenv').config();
// require('./config/passport'); // Passport config

const app = express();

// Middleware
// app.use(passport.initialize());
app.use(express.json()); 
app.use(express.urlencoded({ extended: true })); 
// Routes
app.use('/api/auth', authRoutes);
// app.use('api/profiles', profileRoutes);

// Database Connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log('MongoDB connected'))
.catch(err => console.error(err));

// Start Server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
