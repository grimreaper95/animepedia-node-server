import * as likedAnimeDao from "../daos/LikedAnimeDao.js";
import {findAnimeLikedByUser} from "../daos/LikedAnimeDao.js";

const LikedAnimeController = (app) => {
    const addLikedAnime = async (req, res) => {
        // console.log('abc')

        const userLikedAnime = req.body;
        const userAnimePair = await likedAnimeDao.findAnimeLikedByUser(userLikedAnime.userId, userLikedAnime.animeId)
        if (userAnimePair) {
            res.sendStatus(403)
            return
        }
        const addedAnime = await likedAnimeDao.addLikedAnime(userLikedAnime)
        res.json(addedAnime);
    }

    const findAllLikedAnime = async (req, res) => {
        const userId = req.params.usid;
        const likedAnime = await likedAnimeDao.findAllLikedAnime(userId);
        res.json(likedAnime)
    }

    const findLikesCount = async (req, res) => {
        const animeid = req.params.animeid;
        const totalLikes = await likedAnimeDao.findLikesCount(animeid);
        res.json(totalLikes)
    }

    app.get('/likescount/:animeid', findLikesCount);
    app.get('/like/:usid', findAllLikedAnime);
    app.post('/like', addLikedAnime);
}

export default LikedAnimeController;