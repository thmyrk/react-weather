var React = require('react');
var createReactClass = require('create-react-class');
import { NavLink } from 'react-router-dom'

var Examples = (props) => {
  return (
    <div>
      <h1 className="text-center">Examples</h1>
      <p>Here are a few example locations to try out</p>
      <ol>
        <li><NavLink to='/?location=Philadelphia'>Philadelphia, PA</NavLink></li>
        <li><NavLink to='/?location=Rio'>Rio, Brazil</NavLink></li>
      </ol>
    </div>
  )
}

module.exports = Examples;
