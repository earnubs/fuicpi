require('babel-core/register');

var express = require('express');
var app = express();
var hbs  = require('express-handlebars');
var React = require('react');
var ReactDOMServer = require('react-dom/server');
var InputTypeFile = React.createFactory(require('./components/input-type-file.js'));
var List = React.createFactory(require('./components/list.js'));

var fetch = require('node-fetch');

app.engine('.hbs', hbs({
  defaultLayout: 'main',
  extname: '.hbs'
}));
app.set('view engine', '.hbs');

app.use('/static', express.static('public'));

app.get('/', function (req, res) {

  fetch('https://search.apps.ubuntu.com/api/v1/search?size=500')
  .then(function(res) {
    return res.json();
  }).then(function(json) {
    var data = json['_embedded']['clickindex:package'];
    var content = ReactDOMServer.renderToString(List({
      initialData: data
    }));
    res.render('home', {
      data: JSON.stringify(data),
      content: content
    });
  }).catch(function(err) {
    console.log('there was an error');
    console.log(err);
  });

});

app.listen(3001);
