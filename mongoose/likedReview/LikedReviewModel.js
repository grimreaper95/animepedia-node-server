import mongoose from "mongoose";
import likedReviewSchema from "./LikedReviewSchema.js";
const likedReviewModel = mongoose.model('likedReviewModel', likedReviewSchema);

export default likedReviewModel;