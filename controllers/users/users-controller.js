import * as userDao from '../../daos/UserDao.js'
import {findByCredentials, findByUsername} from "../../daos/UserDao.js";

const findUser = async (req, res) => {
    const user = await userDao.findUser(req.params.usid);
    res.json(user);
}

const createUser = async (req, res) => {
    const newUser = req.body;
    const insertedUser = await userDao.createUser(newUser);
    res.json(insertedUser);
}

const findAllUsers = async (req, res) => {
    const user = await userDao.findAllUsers();
    res.json(user);
}

const deleteUser = async (req, res) => {
    const usid = req.params.usid
    const status = await userDao.deleteUser(usid)
    res.json(status);
}

const updateUser = async (req, res) => {
    const usid = req.params.usid
    const updates = req.body
    const status = await userDao.updateUser(usid, updates)
    res.json(status);
}

const registerUser = async (req, res) => {
    const user = req.body
    const existingUser = await findByUsername(user.username)
    if (existingUser) {
        res.sendStatus(403)
        return
    }
    const insertedUser = await userDao.createUser(user)
    res.json(insertedUser)
}

const login = async (req, res) => {
    const credentials = req.body
    const existingUser = await findByCredentials(credentials.username, credentials.password)
    if (!existingUser) {
        res.sendStatus(403)
        return
    }
    res.json(existingUser)
}

export default(app) => {
    app.get('/profile/all', findAllUsers);
    app.get('/profile/:usid', findUser);
    app.post('/profile', createUser)
    app.delete('/profile/:usid', deleteUser)
    app.put('/profile/:usid', updateUser)
    app.post('/register', registerUser)
    app.post('/login', login)
    app.post('/logout', () => {})
}