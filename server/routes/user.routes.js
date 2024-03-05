const {register, login, logout, getLoggedUser,updateExistinguser, DeleteOneUser, registerAdmin, getAllUsers, getUserById, addFavourite} = require('../controllers/user.controller')

module.exports = app => {
    app.post ('/api/register', register)
    app.post ('/api/admin/register', registerAdmin)
    app.post ('/api/login', login)
    app.post ('/api/logout', logout)
    app.get ('/api/user', getLoggedUser)
    app.delete ('/api/user/:id', DeleteOneUser)
    app.get ('/api/users', getAllUsers)
    app.get ('/api/user/:id', getUserById)
    app.put ('/api/user/:id', addFavourite)
    app.patch("/api/users/:id", updateExistinguser);
}