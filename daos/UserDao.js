import userModel from "../mongoose/users/UserModel.js";

export const findUser = (id) => userModel.findById(id);

export const createUser = (user) => userModel.create(user);