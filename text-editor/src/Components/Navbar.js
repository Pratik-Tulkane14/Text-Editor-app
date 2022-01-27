import React from 'react'
import PropTypes from 'prop-types'

export default function Navbar(props) {
    return (
      <div><>
          <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
              <div className="container-fluid">
                <a className="navbar-brand" herf="">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active" aria-current="page" herf="">{props.nav1}</a>
                    </li>
                  </ul>
                  <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                      <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                </div>
              </div>
          </nav></>
      </div>
   )
}
Navbar.propTypes ={title:PropTypes.string,
                    nav1:PropTypes.string,
                    nav2:PropTypes.string}
Navbar.defaultProps ={
    title:'Text-Editor',
    nav1:'Home'
};