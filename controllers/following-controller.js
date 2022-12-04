import * as followingDao from '../daos/FollowingDao.js'

const addFollower = async (req, res) => {
    console.log("here 1")
    const following = req.body;
    const insertFollower = await followingDao.createFollowing(following)
    res.json(insertFollower);
}

const findAllFollowers = async (req, res) => {
    const userId = req.params.usid;
    const followers = await followingDao.findAllFollowers(userId);
    res.json(followers)
}
export default(app) => {
    app.get('/follow/:usid', findAllFollowers);
    app.post('/follow', addFollower);

}

