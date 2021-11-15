let userDBHelper = require('./user-model')
let bcrypt = require('bcrypt')

module.exports.signUpWithDetails = (req, res) => {

    bcrypt.hash(req.body.password, 8, function (err, hash) {
        req.body.password = hash
        userDBHelper.createNewUser(req.body)
            .then(newCreatedUser => {
                res.send({ status: true, created: true, signedInUserName: newCreatedUser.namme, auth: true })

            })
            .catch(err => {
                res.send({ status: false, created: false, auth: false })
            })
    });


}

module.exports.signinWithEmailAndPassword = (req, res) => {
    console.log(req.body.email)
    userDBHelper.findSingleUserByQuery({ emailId: req.body.email })

        .then(user => {
            console.log(user)
            if (!user) {
                res.status(500).send({ status: false, found: false, email: false, })

                return
            }
            bcrypt.compare(req.body.password, user.password, (err, result) => {

                if (!result) {
                    console.log("password didnt math")
                    res.send({ status: false, errMessage: "The Password didnt match", auth: false })
                    return;
                }

                if (result) {

                    console.log("user")
                    console.log(user)
                    res.send({ status: true, created: true, signedInUserName: user.name, auth: true })

                }

            })
        })

        .catch(err => {
            console.log("Unable to find user by id..!")
            console.log(err)

            res.send({ status: false, found: false, email: false, })
        })
}
