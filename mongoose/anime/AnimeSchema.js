import mongoose from 'mongoose';

const animeSchema = mongoose.Schema({
   animeId: {type: Number, required: true, unique: true},
   image_url: {type: String, required: true},
   title: String,
   synopsis: String,
}, {collection: "anime"});

export default animeSchema;