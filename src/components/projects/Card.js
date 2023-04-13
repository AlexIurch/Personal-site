 // One separate element of the project block (photo, description and link to the site and Git-repository)  

import React from "react"
import './Card.css'

export default function Card(props) {
    return (

        <div className="card-block">

           <div className="photo-block">  <img src={props.img} className="card-image" /></div>
            <div className="info-block">
            <div className="description"><p className="descripton">{props.description}</p></div>
            <div className="buttons">
            <button className="link-site "><a href={props.gitLink}  target="_blank"  rel="noreferrer">GitHub</a></button>
            <button className="link-git"><a href={props.siteLink}  target="_blank"  rel="noreferrer">Try page</a></button></div>
           </div>
           <hr />

        </div>
    )
}