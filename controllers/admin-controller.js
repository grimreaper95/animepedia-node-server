import *  as  adminDao from '../daos/AdminDao.js'

const AdminController = (app) => {

    const login = async (req, res) => {
        const credentials = req.body;
        const adminLogin = await adminDao.findByCredentials(credentials.username, credentials.password);
        if (adminLogin.length === 0) {
            res.sendStatus(401)
            return

        }
        req.session['currentAdmin'] = adminLogin
        res.json(adminLogin)


    }

    const addAmin = async (req, res) => {
        const admin = await adminDao.addAdmin(req.body);
        res.json(admin)

    }

    const getApprovedReviewerList = async (req, res) => {
        const adminId = req.params.aid;
        const approvedList = await adminDao.getApprovedReviewerList(adminId);
        res.json(approvedList);

    }

    const addReviewer = async (req, res) => {
        const reviewerId = req.params.rid;
        const reviewer = req.body;
        const status = await adminDao.updateReviewerList(reviewerId, reviewer);
        res.json(status)


    }

    const getLoggedInAdmin = async (req, res) => {
        if (req.session['currentAdmin']) {
            res.send(req.session['currentAdmin'])
        } else {
            res.sendStatus(403)
        }
    }

    const logout = async (req, res) => {
        req.session.destroy()
        res.sendStatus(200)
    }

    app.post("/admin/login", login);
    app.post("/admin", addAmin)
    app.get("/admin/list/:aid", getApprovedReviewerList)
    app.put("/admin/add-reviewer/:rid", addReviewer)
    app.get("/admin/details", getLoggedInAdmin)
    app.post('admin/logout', logout)
}

export default AdminController;