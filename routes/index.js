let express = require('express');
let router = express.Router();

/* GET home page. */
//go to route first, I want index.ejs + parameter,then going to generate a page.


router.get('/', (req, res, next) =>{
  res.render('index', { title: 'Express' });
});

module.exports = router;
