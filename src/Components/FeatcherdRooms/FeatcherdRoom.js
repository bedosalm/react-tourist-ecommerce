import React, { Component } from 'react';
import {RoomContext} from "../../Context"
import Room from '../Room/Room';
import  Loading  from "../loading/Loading";
import "./feature.css"
import Title from '../Title/Title';

class FeatcherdRoom extends Component {
    static contextType = RoomContext
    render() {
        let { loading , featuredrooms:room} = this.context;

       let roomitem = room.map(item => {
            const {id} = item;
            return <Room key={id} room={item}></Room>
        })
        return (
        <section className="feature-content">
             <Title title="title">featured rooms</Title>
          <div className="items">
          {loading ? <Loading /> : roomitem}
          </div>
        </section>


        )
    }
}

export default FeatcherdRoom;