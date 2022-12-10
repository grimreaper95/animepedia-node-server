import * as reviewDao from '../daos/ReviewDao.js'

const ReviewController = (app) => {
    const findAllReviewsForAnime = async (req, res) => {
        const animeReviews = await reviewDao.findAllAnimeReviews(req.params.aid);
        res.json(animeReviews);
    }

    const findAllReviewsByUser = async (req, res) => {
        const userReviews = await reviewDao.findAllUserReviews(req.params.uid);
        res.json(userReviews);
    }

    const createReview = async (req, res) => {
        const review = req.body;
        const newReview = await reviewDao.createReview(review);
        res.json(newReview);
    }

    const removeReview = async (req, res) => {
         const status = await reviewDao.removeReview(rid)
        res.json(status);
    }

    app.get('/review/anime/:aid', findAllReviewsForAnime);
    app.get('/review/user/:uid', findAllReviewsByUser);
    app.post('/review', createReview)
    app.delete('/remove-review/:rid', removeReview)
}

export default ReviewController