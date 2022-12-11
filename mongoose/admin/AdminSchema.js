import mongoose, {Schema} from "mongoose";

const adminSchema = mongoose.Schema({
    userId:{type: Schema.Types.ObjectId, ref:"UserModel"},
    // username: {type: String, required: true},
    // password: {type: String, required: true},
    // accountType: String,
    // email: String,
    approvedReviewerList: {type: Array}

}, {collection: "admin"});

export default adminSchema;
