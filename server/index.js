import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import courseRoutes from './routes/courses.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/courses', courseRoutes);

// app.get('/', (req, res) => {
//     res.send('Hello to VV-LMS API');
// });

const PORT = process.env.PORT || 5000;
const CONNECTION_URL = "mongodb+srv://user123:123user123@cluster0.6umk0.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// mongoose.connect(process.env.CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);