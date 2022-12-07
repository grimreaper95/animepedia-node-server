import mongoose from "mongoose";
import animeSchema from "./AnimeSchema.js";

const animeModel = mongoose.model('animeModel', animeSchema);

export default animeModel;