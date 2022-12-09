import reviewerModel from "../mongoose/reviewers/ReviewerModel.js";

export const findPendingList = () => reviewerModel.find({approved : false});

export const createReviewer = (reviewer) => reviewerModel.create(reviewer);

export const updateReviewer = (rid, updateReviewer) => reviewerModel.updateOne({_id : rid}, {$set: updateReviewer});