const mongoose = require('mongoose');

require('dotenv').config();

const dbConnect = () => {
    mongoose.connect(process.env.DATA_BASE_URL)
        .then(() => {
            console.log('Database connected successfully');
        })
        .catch((err) => {
            console.error('Database connection error:', err);
            process.exit(1);
        });
};

module.exports = dbConnect;
