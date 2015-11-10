var React = require('react');

module.exports = React.createClass({
  handleClick: function() {
    console.log(this.props.data)
  },
  render: function() {
    return (
      <div onclick={this.handleClick}>{ this.props.data.title }</div>
    )
  }
});
