const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index.html', { tittle: 'First Website'});
});
router.get('/contact', (req, res) => {
    res.render('contact.html', { tittle: 'Contact Page'});
});
router.get('/about', (req, res) => {
    res.render('about.html', { tittle: 'About'});
});
module.exports = router;