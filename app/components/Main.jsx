import React from 'react'
import Nav from 'Nav'
import Weather from 'Weather'
import About from 'About'
import Examples from 'Examples'
import Footer from 'Footer'
import { Router, Route } from 'react-router-dom'
import history from 'routerHistory'

var Main = () => {
  return (
    <Router history={history}>
      <div>
        <Nav />
        <div className="grid-container">
          <div className="grid-x align-center">
            <div className="cell medium-8 large-6 small-centered">
              <Route exact path="/" component={Weather} />
              <Route path="/about" component={About} />
              <Route path="/examples" component={Examples} />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
};

module.exports = Main;
