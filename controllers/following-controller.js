import * as followingDao from '../daos/FollowingDao.js'
import {createFollowing} from "../daos/FollowingDao.js";

const addFollower = async (req, res) => {
    const following = req.body;
    const insertFollower = await followingDao.createFollowing(following)
    res.json(insertFollower);
}

export default(app) => {
    app.post('/follow', addFollower);
}