var React = require('react');
var ReactDOM = require('react-dom');
var InputTypeFile = React.createFactory(require('../components/input-type-file.js'));
var List = React.createFactory(require('../components/list.js'));

require('es6-promise').polyfill();
require('isomorphic-fetch');

ReactDOM.render(
  <List />,
  document.getElementById('example')
);

