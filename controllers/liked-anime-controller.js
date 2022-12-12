import * as likedAnimeDao from "../daos/LikedAnimeDao.js";

const LikedAnimeController = (app) => {
    const addLikedAnime = async (req, res) => {

        const userLikedAnime = req.body;
        const userAnimePair = await likedAnimeDao.findAnimeLikedByUser(userLikedAnime.userId, userLikedAnime.animeId)
        if (userAnimePair) {
            res.sendStatus(403)
            return
        }
        const addedAnime = await likedAnimeDao.addLikedAnime(userLikedAnime)
        res.json(addedAnime);
    }

    const removeLikedAnime = async (req, res) => {

        const userDislikedAnime = req.body;
        const userAnimePair = await likedAnimeDao.findAnimeLikedByUser(userDislikedAnime.userId, userDislikedAnime.animeId)
        if (!userAnimePair) {
            res.sendStatus(403)
            return
        }
        const removedAnime = await likedAnimeDao.removeLikedAnime(userDislikedAnime)
        res.json(removedAnime);
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

    const findUserLikesAnime = async (req, res) => {
        const userLikesAnime = await likedAnimeDao.findAnimeLikedByUser(req.params.usid, req.params.animeid)
        if (userLikesAnime)
            res.json(true)
        else
            res.json(false)
    }

    app.get('/userlikesanime/:usid/:animeid', findUserLikesAnime)
    app.get('/likescount/:animeid', findLikesCount);
    app.get('/like/:usid', findAllLikedAnime);
    app.post('/like', addLikedAnime);
    app.post('/dislike', removeLikedAnime);
}

export default LikedAnimeController;