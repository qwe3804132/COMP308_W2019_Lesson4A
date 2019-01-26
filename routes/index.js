let express = require('express');
let router = express.Router();

/* GET home page. */
//go to route first, I want index.ejs + parameter,then going to generate a page.


router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Home' });
});

router.get('/about', (req, res, next) =>{
  res.render('index', { title: 'About' });
});

router.get('/contact', (req, res, next) =>{
  res.render('index', { title: 'Contact' });
});

router.get('/products', (req, res, next) =>{
  res.render('index', { title: 'Products' });
});

router.get('/services', (req, res, next) =>{
  res.render('index', { title: 'Services' });
});




module.exports = router;
