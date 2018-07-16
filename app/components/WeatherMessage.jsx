var React = require('react');
var createReactClass = require('create-react-class');

var WeatherMessage = (props) => {
  return (
    <h3 className="text-center">Is is {props.temp} in {props.location}</h3>
  )
};

module.exports = WeatherMessage;
