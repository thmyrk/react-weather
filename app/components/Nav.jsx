var React = require('react');
var createReactClass = require('create-react-class');
import { NavLink } from 'react-router-dom'

var Nav = (props) => {
  return (
    <ul>
      <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink></li>
      <li><NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
      <li><NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
    </ul>
  )
};

module.exports = Nav;
