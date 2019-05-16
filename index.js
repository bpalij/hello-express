const express = require('express');

const app = express();

const port = 8081;

app.set('view-engine','hbs');

app.set('views', __dirname);

app.use(function (req, res, next){
  console.log('Request done!');
  next();
});

app.get('/', function (req, res){
  res.render('index.hbs', { date: `${(new Date)}` })
});

app.get('/json', function(req, res){
  const answer = {
    hello: 'Hello, Express!',
    github: 'bpalij',
    date: new Date(),
    echo: { ...req.query },
  };
  res.json(answer);
});

app.listen(port, function() {
  console.log(`Listening port ${port}!`);
})
