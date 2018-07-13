var React = require('react');
var ReactDOM = require('react-dom');
var Main = require('Main');

import style from 'foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
