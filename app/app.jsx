import React from 'react'
import ReactDOM from 'react-dom'
import Main from 'Main'

import style from 'foundation-sites/dist/css/foundation.min.css'
import 'applicationStyles'

require('./styles/fonts/Poppins-Regular.otf');
require('./styles/fonts/Poppins-Bold.otf');
$(document).foundation();

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
