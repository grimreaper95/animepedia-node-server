import mongoose, {Schema}  from "mongoose";

const likedAnimeSchema = mongoose.Schema({
    userId:{type: Schema.Types.ObjectId, ref:"UserModel"},
    animeId : String,
    animeImage: String,
    animeTitle: String
}, {collection:"likedAnime"});

export default likedAnimeSchema;