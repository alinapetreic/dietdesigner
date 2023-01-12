const mongoose = require('mongoose');
const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const path = require('path');

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/static', express.static(path.join(__dirname, 'public')));

mongoose.set('strictQuery', false);

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open', () => console.log("MongoDB database connection established successfully"))

const generatorsRouter = require('./routes/generators');
const authenticationRouter = require('./routes/authentication');

app.use('/api/generate', generatorsRouter);
app.use('/auth', authenticationRouter);

const errorHandler = require('./middleware/error-middleware');

app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});