const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();

const CampsiteRouter = require('./routes/campsiteRouter')

const app = express();
const port = 5000;

// Connect to Database using Mongoose later below
mongoose
    .connect(process.env.DB, { useNewUrlParser: true })
    .then(() => console.log(`Database has connected successfully`))
    .catch((err) => console.log(err));


mongoose.Promise = global.Promise;

// This snippet help handle CORS related issues that we might face
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
});

app.use(bodyParser.json());
app.use('/campsites', CampsiteRouter);

app.use((err, req, res, next) => {
    console.log(err);
    next(err);
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})