import React from 'react'

var WeatherMessage = (props) => {
  return (
    <h3 className="text-center">It is {props.temp} Celsius in {props.location}</h3>
  )
};

module.exports = WeatherMessage;
