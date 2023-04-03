// One separate element of the project block (photo, description and link to the site and Git-repository)  дизайн один блок з одним  проектом

import React from "react"

export default function Card(props) {
    return (
        <div className="card-block">

           <div className="photo-block"></div>
           <div className="info-block">
            <p className="title"></p>
            <p className="descripton"></p>
            <button className="link-site"></button>
            <button className="link-git"></button>
           </div>







          
            {/* <img src={`../images/${props.img}`} className="card-image" />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p className="card--price"><span className="bold">From ${props.price}</span> / person</p> */}
        </div>
    )
}