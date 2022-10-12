const router = require('express').Router();
const { User } = require('../../models');

//CREATE new user
router.post('/signup', async (req, res) => {
    try {
        const dbUserData = await User.create({
            username: req.body.username,
            password: req.body.password
        });

        req.session.save(() => {
            req.session.loggedIn = true;

            res.status(200).json(dbUserData)
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
});

//Login
router.post('/login', async (req, res) => {
    try {
        const dbUserData = await User.findOne({
            where: {
                username: req.body.username
            },
        });

        //Check is user exists in db or username is correct
        if(!dbUserData) {
            res.status(400).json({message: 'Incorrect email or password. Please try again.'});
            return;
        };

        //Check is password is correct
        const validPassword = await dbUserData.checkPassword(req.body.password);
        if (!validPassword) {
            res.status(400).json({message: 'Incorrect email or password. Please try again.'});
            return;
        };

        //Approve authorization, store session, and create cookie
        req.session.save(() => {
            req.session.loggedIn = true;
            console.log("Cookie:", req.session.cookie);
            res.status(200).json({
                user: dbUserData,
                message: 'You are now logged in!'});
        })
    } catch (err) {
        console.log(err)
        res.status(500).json(err);
    }
});

//Logout
router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
            res.status(204).end();
        });
    } else {
        res.status(404).end();
    }
});

module.exports = router;