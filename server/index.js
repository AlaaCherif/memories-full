import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import postRoutes from './routes/posts.js';
const app = express();

app.use('/posts', postRoutes);

app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));
app.use(cors());

const CONNECTION_URL =
  'mongodb+srv://alaacherif:doudoud2D@cluster0.csnjl.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log('Server running on port ', PORT);
    });
  })
  .catch(error => {
    console.log(error.message);
  });
