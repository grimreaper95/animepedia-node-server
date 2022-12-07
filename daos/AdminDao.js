import adminModel from "../mongoose/admin/AdminModel.js";

export const findByCredentials = (username, password) =>
    adminModel.find({username, password},
        {password: false});

export const addAdmin = (admin) => adminModel.create(admin);

export const getApprovedReviewerList = (adminId) => adminModel.findById(adminId);

export const updateReviewerList = (reviewerId, reviewer) => adminModel.updateOne({_id: reviewerId}, {$set: reviewer})


