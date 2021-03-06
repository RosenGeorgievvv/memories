import express from "express";
import bodyParser from "body-parser";
import Mongoose from "mongoose";
import cors from 'cors';
import postRoutes from './routes/posts.js';


const app = express();



app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use('/posts', postRoutes);

//MongoDB Atlas Cloud version

const CONNECTION_URL = 'mongodb+srv://impact:impact123@cluster.rljrr.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

Mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));