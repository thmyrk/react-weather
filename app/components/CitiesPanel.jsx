import React from 'react'
import CityRow from 'CityRow'

class CitiesPanel extends React.Component {
  cityRows() {
    const cities = this.props.cities
    const cityRows = [], size = 3

    while (cities.length > 0) {
      cityRows.push(cities.splice(0, size))
    }

    return cityRows
  }

  shouldComponentUpdate() {
    return false
  }

  render() {
    return (
      <table className="CitiesPanel">
        <tbody>
          {this.cityRows().map((row) =>
            <CityRow key={row[0]} cities={row} />
          )}
        </tbody>
      </table>
    )
  }
}

export default CitiesPanel
