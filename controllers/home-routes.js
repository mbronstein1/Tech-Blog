const router = require('express').Router();
const { User, Post } = require('../models');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({});

hbs.handlebars.registerHelper('ifCond', function(v1, v2, options) {
    if(v1 === v2) {
        console.log(options.fn(this))
        return options.fn(this)
    } else {
        console.log(options.inverse(this))
        return options.inverse(this)
    }
})

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
        console.log(posts)
        res.render('home', { 
            posts,
            loggedIn: req.session.loggedIn
        })
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});

// router.get('/dashboard', async (req, res) => {
//     try {
//         const dbPostData = await Post.findAll({
//             include: [
//                 {
//                     model: User
//                 },
//             ],
//         })
//         const posts = dbPostData.map((post) => post.get({ plain: true }));
//         console.log(posts)
//         res.render('home', { 
//             posts,
//             loggedIn: req.session.loggedIn
//         })
//     } catch (err) {
//         console.log(err);
//         res.status(500).json(err);
//     }
// });

module.exports = router;