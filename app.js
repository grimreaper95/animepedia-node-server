import express from 'express';
import cors from 'cors';
import session from 'express-session'
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users-controller.js";
import SessionController from "./controllers/session-controller.js";

import mongoose from "mongoose";

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false,
    maxPoolSize: 10,
    socketTimeoutMS: 45000,
    family: 4
}
const CONNECTION_STRING = 'mongodb+srv://anime-webdev:p0mAHNcE4K44uPNU@cluster0.4v1rsn2.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING, options);

const app = express()
app.use(cors({
    credentials: true,
    origin: 'http://localhost:3000'
}))

app.use(session({
    secret: 'secretKEYabc',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

app.use(express.json());
HelloController(app);
UsersController(app);
SessionController(app);
app.listen(4000);