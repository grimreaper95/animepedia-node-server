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
            ...newReview["_doc"],
            "reviewer": rev
        };
        res.json(obj);
    }

    const removeReview = async (req, res) => {
         const status = await reviewDao.removeReview(req.params.rid)
        res.json(status);
    }

    const findAverageRating = async (req, res) => {
        const animeReviews = await reviewDao.findAllAnimeReviews(req.params.aid);
        let sumRating = 0;
        let avgRating = 0;
        for(let i in animeReviews) {
            sumRating += animeReviews[i].rating
        }
        const totalReviews = Object.keys(animeReviews).length;
        if (totalReviews > 0) {
            avgRating = Math.round((sumRating/totalReviews) * 10) / 10
        }
        res.json(avgRating);
    }

    app.get('/review/anime/:aid', findAllReviewsForAnime);
    app.get('/review/user/:uid', findAllReviewsByUser);
    app.post('/review', createReview)
    app.delete('/remove-review/:rid', removeReview)
    app.get('/review/avg-rating/:aid', findAverageRating)
}

export default ReviewController