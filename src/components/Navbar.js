import React from 'react'
// import { a } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <div >
            <nav className={` navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
            <a className="navbar-brand" href="#">{props.dashboard}</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="/navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div  className="navbar-nav" >
              
                <a className="nav-item nav-a active" href="#">Home<span className="sr-only"></span></a>
                {/* <a className="nav-item nav-a" href="#about">About</a> */}
                {/* <a className="nav-item nav-a" href="/">{props.team}</a>
                <a className="nav-item nav-a disabled" href="/">Disabled</a> */}
              
                <div  className={`form-check form-switch nav-item  text-${props.mode=== 'light'?'dark':'light'}`} style={{}}>
                  <input className="form-check-input " onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label " for="flexSwitchCheckDefault">Enable dark mode</label>
                </div>
                
            </div>
            </div>
            </nav>
  </div>
  )
}
