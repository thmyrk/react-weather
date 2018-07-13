var React = require('react');
var createReactClass = require('create-react-class');
import { NavLink } from 'react-router-dom'

var Nav = createReactClass({
  onSearch: function (e) {
    e.preventDefault();
    alert('Not yet wired up');
  },
  render: function () {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React weather app</li>
            <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink></li>
            <li><NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
            <li><NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
          </ul>
        </div>
        <div className="tob-bar-right">
          <form onSubmit={this.onSearch}>
            <ul className="menu">
              <li><input type="search" placeholder="Put your city name" /></li>
              <li><input type="submit" className="button" value="Get weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
