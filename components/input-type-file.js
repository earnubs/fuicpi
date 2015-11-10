var React = require('react');

module.exports = React.createClass({

  propTypes: {
    multiple: React.PropTypes.bool,
    accept: React.PropTypes.string
  },

  getDefaultProps: function() {
    return {
      multiple: false,
      accept: '.snap, .click'
    };
  },

  change: function(e) {
    var file = e.target.files[0];
    console.log(file)
  },

  render: function() {
    return (
      <div>
      <input
        type="file"
        multiple={ this.props.multiple }
        accept={ this.props.accept }
        onChange={ this.change }
      />
      </div>
    )
  }
});
