import React, { useState } from 'react';
import {RoomConsumer, RoomContext} from "../../Context";
import "./Room.css";
import roomone from "../../images/room-1.jpeg";
import { Link } from 'react-router-dom';

const Room = ({room}) => {
    const {name,slug,type,price,images} = room;

        return (
            <article className="room-content">
             <div className="img-content">
              <img src={images[0]}/>
              <span>${price}
              <p>per neight</p>
              </span>
             </div>
             <p>{type}</p>
             <Link to={`/Rooms/${slug}`} className="btn-primary middle-btn"> {name} </Link>
            </article >
        );
}


export default Room;