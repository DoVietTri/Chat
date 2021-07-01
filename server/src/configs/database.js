const mongoose = require('mongoose');

const connectDB = () => {
  return mongoose.connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
  }).then(res => {
    console.log('Connect DB success');
  }).catch(err => {
    console.log(err);
  });
}

module.exports = connectDB;
