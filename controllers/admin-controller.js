import *  as  adminDao from '../daos/AdminDao.js'

const AdminController = (app) => {

    const login = async (req, res) => {
        const credentials = req.body;
        const adminLogin = adminDao.findByCredentials(credentials.username, credentials.password);
        if (!adminLogin) {
            res.sendStatus(401)
            return
        }
        res.json(adminLogin)


    }

    const addAmin = async (req, res) => {
        const admin = adminDao.addAdmin(req.body);
        res.json(admin)

    }

    app.get("/admin/login", login);
    app.post("/admin", addAmin)
}

export default AdminController;