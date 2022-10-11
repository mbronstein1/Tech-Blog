const router = require('express').Router();
const { User, Post } = require('../models');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

//Handlebars custom helper function for comparison operator
hbs.handlebars.registerHelper('ifCond', function (v1, v2, options) {
    if (v1 === v2) {
        // console.log(options.fn(this))
        return options.fn(this)
    } else {
        // console.log(options.inverse(this))
        return options.inverse(this)
    }
})

//GET route for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User
                },
            ],
        })
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        // console.log(posts)
        res.render('home', {
            posts,
            isLoggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET route for dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        isLoggedIn: req.session.loggedIn
    })
});

//GET route for login page
router.get('/login', (res, req) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('login');
})

module.exports = router;