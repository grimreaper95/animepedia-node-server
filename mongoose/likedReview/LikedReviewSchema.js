import mongoose, {Schema}  from "mongoose";

const likedReviewSchema = mongoose.Schema({
                                              userId:{type: Schema.Types.ObjectId, ref:"UserModel"},
                                              reviewId:{type: Schema.Types.ObjectId, ref: "ReviewModel"},
                                              likeCount: Number,
                                          }, {collection:"likedReview"});
export default likedReviewSchema;