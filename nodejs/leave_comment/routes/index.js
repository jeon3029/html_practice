var express = require('express');
var router = express.Router();
/* GET home page. */
router.get('/', function (req, res, next) {
  var db = req.db;
  var collection = db.get('comments');
  collection.find({}, {}, function (e, docs) {
    res.render('index', {
      title: '방명록 작성',
      "articleList": docs
    });
  });
});
router.get('/newcomment', function (req, res) {
  res.render('newcomment', {
    title: "세부 내용 작성"
  })
});
router.get('/deletecomment/:id', function (req, res) {
  var db = req.db;
  var useToDelete = req.params.id;
  db.collection('comments').removeById(useToDelete,function(err,result){
    res.send((result==1)?{msg:''}:{msg:'error: '+err});
  });
});
router.get('/<int>')
router.post('/addcomment', function (req, res) {
  var db = req.db;
  var title = req.body.title;
  var content = req.body.content;
  var userid = req.body.userid;
  var email = req.body.email;
  var datetime = req.body.datetime;
  var collection = db.get('comments');

  collection.insert({
    "comment_title": title,
    "comment_content": content,
    "comment_userid": userid,
    "comment_email": email,
    "comment_datetime": datetime
  }, function (err, doc) {
    if (err) {
      res.send("There was a problem adding the information to the db.");
    } else {
      res.location("/");
      res.redirect("/");
    }
  });
})

module.exports = router;