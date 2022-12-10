import express from 'express';
import cors from 'cors';
import session from 'express-session'
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users-controller.js";
import SessionController from "./controllers/session-controller.js";

import mongoose from "mongoose";
import FollowingController from "./controllers/following-controller.js";
import AnimeController from "./controllers/anime-controller.js";
import AdminController from "./controllers/admin-controller.js";
import ReviewController from "./controllers/review-controller.js";
import ReviewerController from "./controllers/reviewer-controller.js";
import LikedAnimeController from "./controllers/liked-anime-controller.js";

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
    cookie: {secure: false}
}))

app.use(express.json({limit: '50mb'}));
HelloController(app);
UsersController(app);
AdminController(app);
SessionController(app);
FollowingController(app);
AnimeController(app);
ReviewController(app);
ReviewerController(app)
LikedAnimeController(app)

app.listen(4000);