import * as reviewerDao from '../daos/ReviewerDao.js'
import userModel from "../mongoose/users/UserModel.js";
import {findReviewerExist} from "../daos/ReviewerDao.js";

const ReviewerController = (app) => {

    const addReviewer = async (req, res) => {
        const reviewer = req.body;
        const inserted = await reviewerDao.createReviewer(reviewer);
        const insertIntoUser = await userModel.create(reviewer)
        res.json(inserted)
    }

    const findPendingReviewers = async (req, res) => {
        const pending = await reviewerDao.findPendingList();
        res.json(pending)
    }

    const updateReviewer = async (req, res) => {
        const rid = req.params.rId;
        const updatedReviewer = req.body;
        const update = await reviewerDao.updateReviewer(rid, updatedReviewer);
        res.json(update)
    }

    const deleteReviewer = async (req, res) => {
        const rid = req.params.rId;
        const status = await reviewerDao.deleteReviewer(rid);
        res.send(status)
    }

    const findReviewer = async (req, res) => {
        const rId = req.params.rId;
        const rev = await reviewerDao.findReviewer(rId);
        res.json(rev)
    }

    const findApprovedReviewers = async (req, res) => {
        const approved = await reviewerDao.findApprovedList();
        res.json(approved)
    }

    const findReviewerExist = async (req, res) => {
        const username = req.params.username;
        const rev = await reviewerDao.findReviewerExist(username);
        res.json(rev)
    }

    app.post('/reviewer', addReviewer);
    app.get('/reviewer/pending', findPendingReviewers)
    app.get('/reviewer/approved', findApprovedReviewers)
    app.put('/reviewer/update/:rId', updateReviewer)
    app.delete('/reviewer/delete/:rId', deleteReviewer)
    app.get('/reviewer/:rId', findReviewer)
    app.get('/reviewer/user/:username', findReviewerExist)


}

export default ReviewerController