import React, { Component } from 'react';
import items from "./data";

const RoomContext = React.createContext();
const RoomConsumer = RoomContext.Consumer;

class RoomsContext extends Component {
    state = {
        rooms : [],
        featuredrooms : [],
        sortedrooms : [],
        loading : true,
        type : "all",
        price : 0,
        size : 0,
        capacity: 1,
        pets: false,
        breakfast: false,
        maxprice:0,
        minprice:0,
        maxSize:0,
        minSize:0
    }

    componentDidMount(){
       let rooms = this.formateData(items);
       let featuredrooms = rooms.filter(item => item.featured === true)
       let maxprice = Math.max(...rooms.map(item => item.price));
       let maxSize = Math.max(...rooms.map(item => item.size));
       this.setState({
           rooms,
           featuredrooms,
           sortedrooms :rooms,
           loading : false,
           price:maxprice,
           maxprice
           
       })
    }

    formateData(items){
        let temp = items.map(room => {
            let id = room.sys.id;
            let images = room.fields.images.map(image => image.fields.file.url)
            let rooms = {...room.fields , images , id}
            return rooms
           
        })
        return temp
    }
    getItem = slug => {
    let templete = [...this.state.rooms];
    const initRoom = templete.find(item => item.slug === slug)
    return initRoom
    }

   

    FilterRooms = (e) => {
    let {rooms, type ,price ,size ,maxSize , maxprice ,capacity} = this.state;
    let  temprooms = [...rooms];
    capacity = parseInt(capacity)
    if(type !== "all"){
    temprooms = temprooms.filter(item => item.type === type);
    }
    if(capacity !== 1){
        temprooms = temprooms.filter(item => item.capacity === capacity);
    }
 
    temprooms = temprooms.filter(item => item.price <= price);
    
    this.setState({
        sortedrooms : temprooms
    })

    }

    handelChanges = (e) => {
        const value = e.target.value;
        const name = e.target.name;
   
         this.setState({
             [name]: value
         },this.FilterRooms)
    }
    

    render() {
        return (
           <RoomContext.Provider value={{...this.state ,getItem:this.getItem,
           handelChanges:this.handelChanges}}>
             {this.props.children}
           </RoomContext.Provider>
        );
    }
}
export {RoomsContext,RoomConsumer,RoomContext}
// export default RoomsContext;