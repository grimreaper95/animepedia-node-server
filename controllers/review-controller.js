import * as reviewDao from '../daos/ReviewDao.js'

const ReviewController = (app) => {
    const findAllAnimeReviews = async (req, res) => {
        const animeReviews = await reviewDao.findAllAnimeReviews(req.params.aid);
        res.json(animeReviews);
    }

    const findAllUserReviews = async (req, res) => {
        const userReviews = await reviewDao.findAllUserReviews(req.params.uid);
        res.json(userReviews);
    }

    const createReview = async (req, res) => {
        const review = req.body;
        const newReview = await reviewDao.createReview(review);
        // const animeData = []
        // for (let i = 0; i < anime.length; i++) {
        //     console.log(anime[i]);
        //     const imageVal = anime[i].images;
        //     console.log(imageVal);
        //     const imageUrl = imageVal.jpg;
        //     const newAnime = new Object({
        //                                     animeId: anime[i].mal_id,
        //                                     image_url: imageUrl.image_url,
        //                                     title: anime[i].title,
        //                                     synopsis: anime[i].synopsis,
        //
        //                                 })
        //     const insertedAnime = await animeDao.createAnime(newAnime);
    // }
        res.json(newReview);
    }

    const removeReview = async (req, res) => {
        const rid = req.params.rid
        const status = await reviewDao.removeReview(rid)
        res.json(status);
    }

    app.get('/review/anime/:aid', findAllAnimeReviews);
    app.get('/review/user/:uid', findAllUserReviews);
    app.post('/review', createReview)
    app.delete('/remove-review/:rid', removeReview)
}

export default ReviewController