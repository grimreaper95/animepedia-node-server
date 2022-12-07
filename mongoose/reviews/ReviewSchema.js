import mongoose, {Schema} from 'mongoose';

const reviewSchema = mongoose.Schema({
                                       animeId: {type: Schema.Types.ObjectId, ref: "AnimeModel"},
                                       reviewBy:  {type: Schema.Types.ObjectId, ref: "UserModel"},
                                       review: String,
                                       rating: Number,
                                   }, {collection: "reviews"});

export default reviewSchema;