import React from 'react'
import createReactClass from 'create-react-class'
import { NavLink } from 'react-router-dom'
import history from 'routerHistory'

var Nav = createReactClass({
  onSearch: function (e) {
    e.preventDefault();

    var location = this.refs.navLocation.value;
    var encodedLocation = encodeURIComponent(location);

    if (location.length > 0) {
      this.refs.navLocation.value = '';
      history.push('/?location=' + encodedLocation);
    }
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
              <li><input type="text" ref="navLocation" placeholder="Enter city name" /></li>
              <li><input type="submit" className="button blue" value="Get weather" /></li>
            </ul>
          </form>
        </div>
      </div>
    );
  }
});

module.exports = Nav;
