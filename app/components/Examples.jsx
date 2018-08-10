import React from 'react'
import CitiesPanel from 'CitiesPanel'
import { NavLink } from 'react-router-dom'

class Examples extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      cities: [
        "Paris, France",
        "Rome, Italy",
        "Berlin, Germany",
        "Canberra, Australia",
        "Ottawa, Canada",
        "Washington, USA",
        "Beijing, China",
        "Brasília, Brazil",
        "Nairobi, Kenya"
      ]
    }
  }

  render() {
    return (
      <div>
        <h1 className="text-center page-title">Examples</h1>
        <p className="text-center">Check the temperatures in various world capitals</p>
        <CitiesPanel cities={this.state.cities}/>
      </div>
    )
  }
}

export default Examples
