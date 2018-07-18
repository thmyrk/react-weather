import React from 'react'
import createReactClass from 'create-react-class'

const About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>This is a weather application built on React.</p>
      <p>
        Here are some of the tools I used:
      </p>
      <ul>
        <li><a href="https://facebook.github.io/react">React</a> - this was the Javascript framework used.</li>
        <li><a href="https://openweathermap.org">Open Weather Map</a> - I used Open Weather Map to search for weather data by city name.</li>
        <li><a href="https://webpack.js.org/">Webpack</a> - this was used to bundle all css and js assets.</li>
      </ul>
    </div>
  )
};

module.exports = About;
