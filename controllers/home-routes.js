const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth')

//GET route for homepage
router.get('/', async (req, res) => {
    try {
        const dbPostData = await Post.findAll({
            include: [
                {
                    model: User
                },
            ],
        });
        const posts = dbPostData.map((post) => post.get({ plain: true }));
        res.render('home', {
            posts,
            isLoggedIn: req.session.loggedIn
        });
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

//GET route for dashboard
router.get('/dashboard', withAuth, async (req, res) => {
    const userPostData = await Post.findAll({
        include: [
            {
                model: User
            }
        ],
        where: {
            user_id: req.session.user_id
        }
    });
    const userPosts = userPostData.map((post) => post.get({ plain: true }));
    console.log(req.session)
    console.log(userPosts);
    res.render('dashboard', {
        layout: 'dashboard-main',
        userPosts,
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

//GET route for signup page
router.get('/signup', (req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    } else {
        res.render('signup')
    }
});

//GET route for ONE post
router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
            include: [
                {
                    model: User
                },
                {
                    model: Comment
                }
            ]
        });
        const post = postData.get({ plain: true })
        console.log(post);
        res.render('post', {
            post,
            isLoggedIn: req.session.loggedIn
        })
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;