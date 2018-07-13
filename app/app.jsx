var React = require('react');
var ReactDOM = require('react-dom');
import { BrowserRouter as Router, Route, hashHistory, NavLink } from 'react-router-dom'
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

import style from 'foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

ReactDOM.render(
  <Router history={hashHistory}>
    <div>
      <Route path="/" component={Main} />
      <Route exact path="/" component={Weather} />
      <Route path="/about" component={About} />
      <Route path="/examples" component={Examples} />
    </div>
  </Router>,
  document.getElementById('app')
);
