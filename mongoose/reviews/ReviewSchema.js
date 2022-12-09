import mongoose, {Schema} from 'mongoose';

const reviewSchema = mongoose.Schema({
                                       animeId: Number,
                                       reviewBy:  {type: Schema.Types.ObjectId, ref: "UserModel"},
                                       review: String,
                                       rating: Number,
                                   }, {collection: "reviews"});

export default reviewSchema;