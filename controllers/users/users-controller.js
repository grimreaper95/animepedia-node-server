import * as userDao from '../../daos/UserDao.js'

const findUser = async (req, res) => {
    const user = await userDao.findUser(req.params.usid);
    res.json(user);
}

const createUser = async (req, res ) => {
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    res.json(insertedUser);
}

export default(app) => {
    app.get('/profile/:usid', findUser);
    app.post('/profile', createUser)
}