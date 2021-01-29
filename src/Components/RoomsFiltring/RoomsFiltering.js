import React, { Component } from 'react';
import { RoomConsumer } from '../../Context';
import RoomsFilter from './RoomsFilter';
import RoomsList from './RoomsList';
import Loading from "../loading/Loading"
import "./RoomsFiltring.css"

class RoomsFiltering extends Component {
    render() {
        return (
            <div>
                <RoomConsumer >
                    {value => {
                      const {loading , sortedrooms , rooms} = value;
                      if(loading){
                          return <Loading />
                      }
                        return (
                        <div>
                             <RoomsFilter rooms={rooms}/>
                             <RoomsList roomsList = {sortedrooms}/>
                        </div>
                        )
                    }}
                   
                </RoomConsumer>
            </div>
        );
    }
}

export default RoomsFiltering;