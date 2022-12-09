import * as reviewerDao from '../daos/ReviewerDao.js'

const ReviewerController = (app) => {

    const addReviewer = async (req, res ) => {
        const reviewer = req.body;
        const inserted = await reviewerDao.createReviewer(reviewer);
        res.json(inserted)
    }

    const findPendingReviewers = async (req, res) => {
        const pending = await reviewerDao.findPendingList();
        res.json(pending)
    }

    const updateReviewer = async (req, res ) => {
        const rid = req.params.rid;
        const updatedReviewer = req.body;
        const update = await reviewerDao.updateReviewer(rid, updatedReviewer);
        res.json(update)
    }

    app.post('/reviewer', addReviewer);
    app.get('/reviewer/pending', findPendingReviewers)
    app.put('/reviewer/update', updateReviewer)


}

export default ReviewerController