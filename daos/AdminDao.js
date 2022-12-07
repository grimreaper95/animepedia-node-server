import adminModel from "../mongoose/admin/AdminModel.js";

export const findByCredentials = (username, password) =>
    adminModel.find({username, password},
        {password: false});

export  const addAdmin = (admin) => adminModel.create(admin);