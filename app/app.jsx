var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, hashHistory, NavLink } from 'react-router-dom'
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
  <Router history={hashHistory}>
    <div>
      <ul>
        <li><NavLink exact to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Home</NavLink></li>
        <li><NavLink exact to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</NavLink></li>
        <li><NavLink exact to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</NavLink></li>
      </ul>
      <Route path="/" component={Main} />
      <Route exact path="/" component={Weather} />
      <Route path="/about" component={About} />
      <Route path="/examples" component={Examples} />
    </div>
  </Router>,
  document.getElementById('app')
);
