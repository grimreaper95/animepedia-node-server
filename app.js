import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";
import UsersController from "./controllers/users-controller.js";
import mongoose from "mongoose";

const CONNECTION_STRING = 'mongodb+srv://anime-webdev:p0mAHNcE4K44uPNU@cluster0.4v1rsn2.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors())

app.use(express.json());
HelloController(app);
UsersController(app);

app.listen(4000);