import adminModel from "../mongoose/admin/AdminModel.js";

const findByCredentials = (username, password) =>
    adminModel.find({username, password},
        {password: false});

const addAdmin = (admin) => adminModel.create(admin);