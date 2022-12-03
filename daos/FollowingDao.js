import followingModel from "../mongoose/following/FollowingModel.js";

export const createFollowing = (following) => followingModel.create(following);

export const removeFollower = (id) => followingModel.deleteOne(id);