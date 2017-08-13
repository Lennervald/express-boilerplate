import express from 'express';
let router = express.Router();

router.get('/', function(req, res, next){
  res.render('index', {
    title: 'Express with Handlebars'
  });
});

module.exports = router;
