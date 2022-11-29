import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    accountType: String,
    email: String,
    approvedReviewerList: {type: Array}

}, {collection: "admin"});

export default adminSchema;
