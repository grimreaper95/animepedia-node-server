import followingModel from "../mongoose/following/FollowingModel.js";

export const createFollowing = (following) => followingModel.create(following);

export const findAllFollowers = (userId) => followingModel.find({userId : userId});

export const deleteFollower = (unfollowId) => followingModel.deleteOne({userId: unfollowId.usid, followingId: unfollowId.fid});