import * as reviewDao from '../daos/ReviewDao.js'
import {findUser} from "../daos/UserDao.js";
const ReviewController = (app) => {
    const findAllReviewsForAnime = async (req, res) => {
        const animeReviews = await reviewDao.findAllAnimeReviews(req.params.aid);
        let returnVal = []
        for(let i in animeReviews) {
            const rev = await findUser(animeReviews[i].reviewBy)
            console.log("animeReviews[i]", animeReviews[i])
            console.log("rev", rev)
            const obj = {
                ...animeReviews[i]["_doc"],
                "reviewer": rev
            };
            console.log("obj", obj)
            returnVal.push(obj)
        }
        console.log(returnVal)
        res.json(returnVal);
    }

    const findAllReviewsByUser = async (req, res) => {
        const userReviews = await reviewDao.findAllUserReviews(req.params.uid);
        res.json(userReviews);
    }

    const createReview = async (req, res) => {
        const review = req.body;
        const newReview = await reviewDao.createReview(review);
        console.log(newReview)
        const rev = await findUser(newReview['reviewBy'])
        const obj = {
            "review": newReview,
            "reviewer": rev
        };
        res.json(obj);
    }

    const removeReview = async (req, res) => {
         const status = await reviewDao.removeReview(req.params.rid)
        res.json(status);
    }

    app.get('/review/anime/:aid', findAllReviewsForAnime);
    app.get('/review/user/:uid', findAllReviewsByUser);
    app.post('/review', createReview)
    app.delete('/remove-review/:rid', removeReview)
}

export default ReviewController