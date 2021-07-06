import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';
import chapterRoute from './routes/chapters.js';
import classRoutes from './routes/classes.js';
import courseRoutes from './routes/courses.js';
import questionRoutes from './routes/questions.js';
import searchEqRoute from './routes/searchEq.js';
import subjectRoute from './routes/subjects.js';
import topicRoute from './routes/topics.js';
import userRoutes from './routes/users.js';

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors({ origin: true }));

app.use('/user', userRoutes);
app.use('/courses', courseRoutes);
app.use('/questions', questionRoutes);
app.use('/classes', classRoutes);
app.use('/subjects', subjectRoute);
app.use('/chapters', chapterRoute);
app.use('/topics', topicRoute);
app.use('/searchEq', searchEqRoute);

app.get('/', (req, res) => {
    res.send("Welcome to Projects API");
});

const CONNECTION_URL = process.env.CONNECTION_URL;
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        }))
    .catch((error) => console.log(error.message));

mongoose.set('useFindAndModify', false);