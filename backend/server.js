const express = require('express'); //Single-page, multi-page, and hybrid mobile and web apps
const cors = require('cors');  // Cross Origin Resource Sharing
const mongoose = require('mongoose'); 

require('dotenv').config();

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true,useCreateIndex: true});
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const Router = require('./routes/question');

app.use('/question', Router);


app.listen(port, () => {
    console.log(`Server is running localhost: ${port}`);
});
