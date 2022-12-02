import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    firstName: String,
    lastName: String,
    email: String,
    accountType: {type: String, enum: ["ADMIN", "USER", "REVIEWER"]},
}, {collection: "users"});

export default userSchema;