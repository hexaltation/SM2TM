var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var remaining = 10;
var timeron = false;
var start_time;

var counting = ()=>{
  remaining -= 1;
  console.log('\x1b[41m%s\x1b[0m',remaining);
};

/* GET home page. */
router.get('/', (req, res, next) => {
  fs.readdir(path.join(__dirname, '../public/images'), (err, files) => {
    files = files.filter(file => !(/(^|\/)\.[^\/\.]/g).test(file));
    res.render('index', { title: 'Soutenance', images: files });
  })
});

/* PUT current image id. */
router.put('/:id', (req, res, next) => {
  let  id = req.params.id;

  fs.readFile(path.join(__dirname, '../public/data/soutenance.txt'), "utf-8", (err, data) => {
    let parts  = data.split("%%%%%\n");
    console.log('\x1b[31m%s\x1b[0m', parts[id]);
  })
  res.json("DONE");
});

/* Start timer. */
router.get('/starttimer', (req, res, next) => {
  res.json("DONE");
  if(!timeron){
    timeron = true;
    if (remaining >=0){
      console.log('\x1b[41m%s\x1b[0m',remaining, "Let's Go, don't worry, GLHF")
      setInterval(counting, 60000)
    }
    else{
      console.log('\x1b[41m%s\x1b[0m',"C'est fini pour aujourd'hui les amis")
    }
  }
});

module.exports = router;
