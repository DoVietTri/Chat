require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./configs/database');
const appRouters = require('./routes');
const auth = require('./middlewares/auth');

const app = express();

connectDB();

app.use(cors());

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', appRouters.authRoute);
app.use('/api/contact', auth.isAuth, appRouters.contactRoute);

app.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Listen to  ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
