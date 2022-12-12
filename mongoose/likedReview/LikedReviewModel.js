import mongoose from "mongoose";
import likedReviewSchema from "./likedReviewSchema.js";
const likedReviewModel = mongoose.model('likedReviewModel', likedReviewSchema);

export default likedReviewModel;