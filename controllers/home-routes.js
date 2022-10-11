const router = require('express').Router();
const { User, Post, Comment } = require('../models');

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
        layout: 'dashboard',
        isLoggedIn: req.session.loggedIn
    })
});

//GET route for login page
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('login');
    }
});

router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('signup')
    }
});

module.exports = router;