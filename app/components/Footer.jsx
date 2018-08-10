import React from 'react'

const Footer = () => {
  return (
    <footer>
      <span className="align-middle">
        developed by Przemysław Piotrowski &copy; 2018
        <a href="https://github.com/thmyrk">
          <img className="github_icon" src={require("../styles/images/github_icon.svg")} alt="Github" />
        </a>
      </span>
    </footer>
  )
}

export default Footer
