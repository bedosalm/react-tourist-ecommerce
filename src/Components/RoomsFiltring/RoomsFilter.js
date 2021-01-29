import React, { useContext} from 'react';
import {RoomContext}  from "../../Context";
import Title from "../Title/Title";


const RoomsFilter = ({rooms}) => {
    const context = useContext(RoomContext);
   const {loading, price , size, type , handelChanges,capacity,maxprice,minprice} = context;

   const types = ["all" ,...new Set(rooms.map(item => item.type))];
   const capacities = [...new Set(rooms.map(item => item.capacity))]


        return (
            <div  className="form-Filter">
             <Title title="title">search Rooms</Title>
             <form>
                 <div className="formStyle">
                     <div className="input-control">
                     <label>room type</label>
                     <select value={type} name="type" onChange={handelChanges}>
                             {types.map((res,index)=> {
                                 return (
                                    <option key = {index}>{res}</option>
                                 )
                             })}
                     </select>
                     </div>
                     <div className="input-control">
                     <label>room capacity</label>
                     <select value={capacity} name="capacity" onChange={handelChanges}>
                             {capacities.map((res,index)=> {
                                 return (
                                    <option key = {index}>{res}</option>
                                 )
                             })}
                     </select>
                     </div>
                     <div className="input-control">
                     <label>room price {price}</label>
                     <input type="range" name = "price" onChange={handelChanges}
                     max={maxprice} min={minprice} value={price}
                     />
                     </div>
                 </div>
             </form>
            </div>
            
        );
}

export default RoomsFilter;