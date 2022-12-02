import mongoose from "mongoose";

const followingSchema = mongoose.Schema({
    userId: {type: Schema.Types.ObjectId, ref: "UserModel"},
    followingId: {type: Schema.Types.ObjectId, ref: "UserModel"},
}, {collection: "following"});

export default followingSchema;