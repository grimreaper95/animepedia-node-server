import *  as  adminDao from '../daos/AdminDao.js'

const AdminController = (app) => {

    const login = async (req, res) => {
        const credentials = req.body;
        const adminLogin = await adminDao.findByCredentials(credentials.username, credentials.password);
        if (!adminLogin) {
            res.sendStatus(401)
            return
        }
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

    app.get("/admin/login", login);
    app.post("/admin", addAmin)
    app.get("/admin/list/:aid", getApprovedReviewerList)
}

export default AdminController;