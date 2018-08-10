import React from 'react'
import history from 'routerHistory'

class CityElement extends React.Component {
  onClick(event) {
    history.push('/?location=' + event.target.innerText);
    return false
  }

  render() {
    return (
      <td className="CityElement">
        <a onClick={this.onClick}>{this.props.city}</a>
      </td>
    )
  }
}

export default CityElement
