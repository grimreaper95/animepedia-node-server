import likedReviewModel from "../mongoose/likedReview/likedReviewModel.js";

export const addLikedReview = (userLikedReview) => likedReviewModel.create(userLikedReview);

export const findAllLikedReview = (userId) => likedReviewModel.find({userId : userId});

export const findLikesCount = (reviewId) => likedReviewModel.find({reviewId : reviewId}, {userId: false});

export const findReviewLikedByUser = (userId, reviewId) =>
    likedReviewModel.findOne({userId: userId,
                                 reviewId: reviewId});
