const bcrypt = require('bcryptjs');

module.exports = {

    registerUser: (req, res) => {
        //get the username, password and email from body

        const {username, password, email} = req.body;
        console.log(req.body);
        const db = req.app.get('db');

        //check username not taken
        db.verifyUser(username).then(usersList => {
            if (usersList.length > 0) {
                res.status(403).json({
                    error: 'USERNAME OR PASSWORD ALREADY TAKEN'
                })
            } else {
                bcrypt.hash(password, 12).then(newPassword => {
                    db.createUser([username, newPassword, email]).then(() => {
                        req.session.user = {
                            username: username,
                            email: email
                        }
                        res.status(200).json(req.session.user);
                    }
                    ).catch(err => console.log(err))
                })
            }
        })

        //hash password
        //store in database
        //put user on session
        //send response

    }
}