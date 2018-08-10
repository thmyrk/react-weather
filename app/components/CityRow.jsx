import React from 'react'
import CityElement from 'CityElement'

const CityRow = (props) => {
  return (
    <tr className="CityRow">
      {props.cities.map((city) =>
        <CityElement key={city} city={city} />
      )}
    </tr>
  )
}

export default CityRow
