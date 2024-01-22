const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors')

const authRoute = require('./routes/auth.route')

dotenv.config();

app.use(express.json());
app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

const PORT = process.env.PORT || 8000

mongoose.connect(process.env.MONGO_URL)
    .then(console.log('Connect to MongoDB'))
    .catch((err) => {
        console.log('Lost connected to MongoDB', err);
    });

//* ROUTE


app.listen(PORT, () => {
    console.log(`Backend is running at port ${PORT}`);
});

app.use('/api/auth', authRoute);