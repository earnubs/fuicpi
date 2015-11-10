var React = require('react');
var Item = require('./list-item.js');

require('es6-promise').polyfill();
require('isomorphic-fetch');

if (typeof(window) == 'undefined'){
  global.window = new Object();
}

module.exports = React.createClass({
  componentDidMount: function() {
    var self = this;
    fetch('https://search.apps.ubuntu.com/api/v1/search?size=1000')
      .then(function(response) {
        return response.json();
      })
      .then(function(json) {
        var data = json['_embedded']['clickindex:package'];

        if (self.isMounted()) {
          self.setState({
            data: data
          });}
      })
  },

  getInitialState: function() {
    return {
      data: this.props.initialData || window.DATA || [],
    };
  },

  render: function() {
    var nodes = this.state.data.map(function (item) {
      return (
        <Item data={item} key={item.name} />
      )
    });

    return (
      <div>
      { nodes }
      </div>
    )
  }
});
