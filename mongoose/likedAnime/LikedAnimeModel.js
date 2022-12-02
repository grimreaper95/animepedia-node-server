import mongoose from "mongoose";
import likedAnimeSchema from "./LikedAnimeSchema.js";

const likedAnimeModel = mongoose.model('LikedAnimeModel', likedAnimeSchema);

export default likedAnimeModel;