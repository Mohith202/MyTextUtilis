import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'
import Alert from "./Alert";




export default function Navbar(prop) {
  const style = {
    backgroundColor: "white",
    color: "black"
  }
  const [theme,setTheme]=useState("")
  // const changeTheme=(colr)=>{
  //   // setTheme(colr)
  //   colr.preventDefault();
  //   console.log(colr)
  // }
  

  const style1 = {
    backgroundColor: "black",
    color: "white"
  }
  return (
    
    <div>
      <div >
        <nav className="navbar navbar-expand-lg bg-body-${props.mode} ">
          <div className="container-fluid" style={prop.mode === "light" ? style : style1} >
            <a className="navbar-brand" href="#" style={prop.mode === "light" ? style : style1}>{prop.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent" style={prop.mode === "light" ? style : style1} >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0" >
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" hraf="/">Home</a>
                </li>
                </ul>
                
                
              <div>
                <button type="button"  className="btn btn-primary mx-1">Primary</button>
                <button type="button" className="btn btn-success mx-1">Success</button>
                <button type="button" className="btn btn-danger mx-1">Danger</button>
                <button type="button" className="btn btn-warning mx-1">Warning</button>
                <button type="button" className="btn btn-info mx-1">Info</button>
              </div>
              <div className="form-check form-switch">
                <input className="form-check-input" onClick={prop.modeChange} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                <label className="form-check-label mx-2" htmlFor="flexSwitchCheckDefault" value="">Dark Mode</label>
              </div>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />

                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </div>
    </div>
    
  )
  }
Navbar.propTypes = {
  title: PropTypes.string

}
Navbar.defaultProps = {
  title: "MoHITH_WEBSITE"
};