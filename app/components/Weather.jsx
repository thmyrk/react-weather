import React from 'react'
import WeatherForm from 'WeatherForm'
import WeatherMessage from 'WeatherMessage'
import CitiesPanel from 'CitiesPanel'
import openWeatherMap from 'openWeatherMap'
import ErrorModal from 'ErrorModal'
import queryString from 'query-string'

class Weather extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      isLoading: false,
      cities: [
        "Warsaw",
        "Kraków",
        "Katowice",
        "Białystok",
        "Łódź",
        "Gdańsk"
      ]
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(location) {
    this.setState({
      isLoading: true,
      errorMessage: undefined,
      location: undefined,
      temp: undefined
    })

    openWeatherMap.getTemp(location).then((temp) => {
      this.setState({
        location: location,
        temp: temp
      })
    }).catch((error) => {
      this.setState({ errorMessage: error.message })
    }).then(() => {
      this.setState({ isLoading: false })
    })
  }

  componentDidMount() {
    var location = queryString.parse(this.props.location.search).location;

    if (location && location.length > 0) {
      this.handleSearch(location);
    }
  }

  componentWillReceiveProps(newProps) {
    var newLocation = queryString.parse(newProps.location.search).location;
    var oldLocation = queryString.parse(this.props.location.search).location;

    if (newLocation && newLocation.length > 0 && newLocation != oldLocation) {
      this.handleSearch(newLocation);
    }
  }

  render() {
    var {isLoading, temp, location, errorMessage} = this.state;

    function renderMessage () {
      if (isLoading) {
        return <h3 className="text-center">Fetching weather...</h3>;
      } else if (temp && location) {
        return <WeatherMessage location={location} temp={temp} />
      }
    }

    function renderError () {
      if (typeof errorMessage == 'string') {
        return (
          <ErrorModal message={errorMessage}/>
        )
      }
    }

    return (
      <div>
        <h1 className="page-title">Get Weather</h1>
        <WeatherForm onSearch={this.handleSearch} />
        <div className="weather-message">{renderMessage()}</div>
        {renderError()}
        <p className="CitiesPanelText">Try one of the following locations:</p>
        <CitiesPanel cities={this.state.cities}/>
      </div>
    );
  }
}

export default Weather
