const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.json());


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World!')
})
app.post('/login', function (req, res) {
  if (checkUid(req.body.uid)){

    res.send({message:"Success !!"})
  } else {
    res.sendStatus(401);
  }

})
function checkUid(uid){
  if (uid=='ASAbXDER'){
    return true;
  } else {
    return false;
  }
}

app.post('/list', function (req, res) {
  if (checkUid(req.body.uid)){
  res.send(JSON.stringify([
    {name:"Canbaz",character:"Zerg",talent:false},
    {name:"Badem",character:"Terran",talent:true},
    {name:"Acil",character:"Pro??",talent:true},
  ]))
} else {
  res.sendStatus(401);
}

})

app.listen(3001, function () {
  console.log('Example app listening on port 3000!')
})
