var React = require('react');
var createReactClass = require('create-react-class');
var Nav = require('Nav');

var Main = createReactClass({
  render: function () {
    return (
      <div>
        <Nav />
        <h2>Main component</h2>
      </div>
    );
  }
});

module.exports = Main;
