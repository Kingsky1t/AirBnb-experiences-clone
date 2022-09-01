import React from "react"
import pin from "./pin.png"
// import "./card.css"

export default function Card(props) {
    return (
        <div className="container">
            <img className="image" src={props.item.imageUrl} alt="Location"/>
            <div className="details">
                <span className="location">
                    <img src={pin} alt="pin" className="pin"/>
                    {props.item.location}
                </span>
                <a className="locUrl" href={props.item.googleMapsUrl}>View on Google Maps</a>
                <h1 className="title">{props.item.title}</h1>
                <h4 className="date">{props.item.startDate}-{props.item.endDate}</h4>
                <p className="description">{props.item.description}</p>
            </div>
        </div>
    )
}
