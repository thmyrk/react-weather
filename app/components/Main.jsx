var React = require('react');
var createReactClass = require('create-react-class');
var Nav = require('Nav');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');
import { BrowserRouter as Router, Route, hashHistory, NavLink } from 'react-router-dom'

var Main = (props) => {
  return (
    <Router history={hashHistory}>
      <div>
        <Nav />
        <div className="grid-container">
          <div className="grid-x align-center">
            <div className="cell medium-6 large-4 small-centered">
              <Route exact path="/" component={Weather} />
              <Route path="/about" component={About} />
              <Route path="/examples" component={Examples} />
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
};

module.exports = Main;
