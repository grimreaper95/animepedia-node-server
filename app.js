import express from 'express';
import cors from 'cors';
import HelloController from "./controllers/hello-controller.js";

const app = express()
app.use(cors())

app.use(express.json());
HelloController(app);

app.listen(4000);