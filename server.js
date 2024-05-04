const express = require('express');
const cors = require('cors');
const connectToDB = require('./config/ConnectiontoDB');
const UserRoute = require('./routes/UserRoute');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 8081;

app.get('/', (req, res) => {
    res.status(200).send({ msg: 'Server has been started' });
});

// Register user routes
app.use('/user', UserRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Connect to the database
connectToDB();
