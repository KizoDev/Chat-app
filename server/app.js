const express = require('express');
const app = express();
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');

 const routeruser = require('./routes/user');
 const routerconvo = require('./routes/conversation');
 const routermessage = require('./routes/message');

// middleware

app.use(express.json());

// routes

app.use('/', routeruser);
app.use('/conversation', routerconvo);
app.use('/', routermessage);


app.use(notFound);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 2000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
