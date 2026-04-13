import React from 'react'
import "./room-card.css"
function RoomCard({title,img,desc,price}){
    return(
        <div className="room-show-card">
            <img src={img} alt="" className="room-card-img" />
            <h1 className="room-card-title">{title}</h1>
            <p className="room-card-txt">{desc}</p>
            <p className='room-card-price'>{price}</p>
        </div>
    )
}

export default RoomCard;