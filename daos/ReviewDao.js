import reviewModel from "../mongoose/reviews/ReviewModel";

export const createReview = (review) => reviewModel.create(review);

export const removeReview = (id) => reviewModel.deleteOne(id);

export const findAllAnimeReviews = (animeId) => reviewModel.find({animeId : animeId});

export const findAllUserReviews = (id) => reviewModel.find({reviewBy : id});