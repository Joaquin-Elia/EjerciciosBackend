import express from 'express';
import {__dirname} from './utils.js';
import viewsRouter from './routes/views.js';
import handlebars from 'express-handlebars';
import mongoose from 'mongoose';
import CoursesRouter from './routes/courses.js';
import UsersRouter from './routes/users.js';
import StudentsRouter from './routes/students.js';
import passport from 'passport';
import initializePassport from './config/passport.js'

const coursesRouter = new CoursesRouter()
const usersRouter = new UsersRouter()
const studentsRouter = new StudentsRouter()

const app = express();

initializePassport()
app.use(passport.initialize())

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.engine('handlebars', handlebars.engine());
app.set('views', `${__dirname}/views`);
app.set('view engine', 'handlebars');


app.use('/', viewsRouter);
app.use('/api/users', usersRouter.getRouter());
app.use('/api/courses', coursesRouter.getRouter());
app.use('/api/students', studentsRouter.getRouter());

try {
    await mongoose.connect('mongodb+srv://joaquinelia:4iOyPwxbtCoxQlmS@cluster39760je.eja9lgp.mongodb.net/2dapractica?retryWrites=true&w=majority')
} catch (error) {
    console.log(error);
}
app.listen(8080);
