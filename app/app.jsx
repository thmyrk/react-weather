import React from 'react'
import ReactDOM from 'react-dom'
import Main from 'Main'

import 'applicationStyles'
import style from 'foundation-sites/dist/css/foundation.min.css'
$(document).foundation();

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
