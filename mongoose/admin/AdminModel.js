import mongoose from "mongoose";
import adminSchema from "./AdminSchema.js";

const adminModel = mongoose.model('AdminModel', adminSchema);

export default adminModel;