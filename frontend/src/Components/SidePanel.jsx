import "./SidePanel.css"
import React from 'react'
import logo from "../logo.png"
import ListSidePanel from "./ListSidePanel"

export const SidePanel = () => {
  return (
    <div className="container">
        <div className="heading">
            <img className="logo" src={logo} alt="logo"/>
            <h4>Mitsubishi</h4>
        </div>

        <ListSidePanel/>
    </div>
  )
}
