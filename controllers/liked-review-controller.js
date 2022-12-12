import * as likedReviewDao from "../daos/likedReviewDao.js";

const LikedReviewController = (app) => {
    const addLikedReview = async (req, res) => {

        const userLikedReview = req.body;
        const userAnimePair = await likedReviewDao.findReviewLikedByUser(userLikedReview.userId, userLikedReview.reviewId)
        if (userAnimePair) {
            res.sendStatus(403)
            return
        }
        const addedAnime = await likedReviewDao.addLikedReview(userLikedReview)
        res.json(addedAnime);
    }

    const findReviewCount = async (req, res) => {
        const reviewId = req.params.rid;
        const totalLikes = await likedReviewDao.findLikesCount(reviewId);
        res.json(totalLikes)
    }

    const findUserReviewAnime = async (req, res) => {
        const userLikesAnime = await likedReviewDao.findReviewLikedByUser(req.params.uid, req.params.rid)
        if (userLikesAnime)
            res.json(true)
        else
            res.json(false)
    }

    app.get('/userlikesreview/:uid/:rid', findUserReviewAnime)
    app.get('/reviewlikescount/:rid', findReviewCount);
    app.post('/likereview', addLikedReview);
}

export default LikedReviewController;