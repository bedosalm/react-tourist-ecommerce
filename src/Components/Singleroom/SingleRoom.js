import React , {Component} from "react";
import {Link} from 'react-router-dom';
import { RoomContext } from "../../Context";
import Banner from "../Banner/Banner";
import StyleHeader from "../HeaderStyle/StyledComponent";
import defaultbg from "../../images/room-1.jpeg";
import "./Singleroom.css"

class Singleroom extends Component{
 constructor(props){
   super(props);
   console.log(props)
  this.state = {
    slug:this.props.match.params.slug,
    defaultbg,
  };

 }
 static contextType = RoomContext;
render(){
  const { getItem } = this.context;
  const room = getItem(this.state.slug);
  if(!room){
    return(
       <Banner title="no such room here">
        <Link to="/Rooms" className="btn-primary">Back to Rooms</Link>
       </Banner>
    )
  }
  const {type,name,price,slug,capacity,pets,breakfast,featured,description,size,images,extras} = room;

  const [mainImage , ...defaultimgs] = images;
  return (
      <>
      <StyleHeader img={mainImage  || this.state.defaultbg}>
        <Banner title={slug} subTitle={type}>
         <Link to="/Rooms" className="btn-primary">Back To Rooms</Link>
        </Banner>
      </StyleHeader>
      <div className="Room-info-section">
           <section className="images">
             {defaultimgs.map((image,index) => {
               return (
                 <div key={index} className="img-content">
                   <img src={image}/>
                 </div>
               )
             })}
           </section>
           <div className="info">
              <div className="text">
                <h3>Details</h3>
                <p>{description}</p>
              </div>
             <div className="aveliabel">
               <h3>Info</h3>
                <h6>type : {type}</h6>
                <h6>price : {price}</h6>
                <h6>size : {size}</h6>
                <h6>capacity : {capacity > 1 ? `${capacity} people`: ` ${capacity} person`}</h6>
                <h6>{pets ? "pets allowed" : "pets not allowed"}</h6>
                <h6>{breakfast && "free breakfast"}</h6>
             </div>
           </div>
          <div>
          <h3 className="extra-title">Extras</h3>
          <ul>
             {extras.map((ex,index)=> {
               return (
                 <li key={index}>{ex}</li>
               )
             })}
           </ul>
          </div>
      </div>
   </>   
  )
 }
}

export default Singleroom