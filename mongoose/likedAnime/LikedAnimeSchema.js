import mongoose from "mongoose";

const likedAnimeSchema = mongoose.Schema({
    userId:{type: Schema.Types.ObjectId, ref:"UserModel"},
    animeId : {type: Schema.Types.ObjectId, ref:"AnimeModel"}
}, {collection:"likedAnimes"});

export default likedAnimeSchema;