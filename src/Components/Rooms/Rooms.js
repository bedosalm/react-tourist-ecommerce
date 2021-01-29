import React , {useState , useEffect} from "react";
import {Link} from 'react-router-dom';
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import {RoomConsumer} from '../../Context'
import RoomsFiltering from "../RoomsFiltring/RoomsFiltering";

const Rooms = (props) => {
  return (
      <>
      <Header backGr="moreHeader">
        <Banner title="ILEXA ROOMS">
         <Link to="/" className="btn-primary">
           Back Home
         </Link>
        </Banner>
      </Header>
      <RoomsFiltering />
      </>
  )
}

export default Rooms