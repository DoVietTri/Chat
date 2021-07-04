require('dotenv').config();
const express = require('express');
const http = require('http');
const socketio = require('socket.io');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./configs/database');
const appRouters = require('./routes');
const auth = require('./middlewares/auth');
const socket =  require('./sockets');


const app = express();

const corsOptions = {
  origin: "*",
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true
}

connectDB();

app.use(cors(corsOptions));

//init server with socket.io & express app
const server = http.createServer(app);
const io = socketio(server, { cors: corsOptions});

// for parsing application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/api', appRouters.authRoute);
app.use('/api/contact', auth.isAuth, appRouters.contactRoute);
app.use('/api/user', auth.isAuth, appRouters.userRoute);
app.use('/api/chat', auth.isAuth, appRouters.chatRoute);

socket(io);

server.listen(process.env.APP_PORT, process.env.APP_HOST, () => {
  console.log(`Listen to  ${process.env.APP_HOST}:${process.env.APP_PORT}`);
});
