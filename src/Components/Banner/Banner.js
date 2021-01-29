import React , {useState} from "react";
import "./Banner.css"

const Banner = ({title,subTitle,children}) => {

    return (
        <>
           <div className="banner">
               <h1>{title}</h1>
               <div className="line"/>
               <p>{subTitle}</p>
               {children}
           </div>
        </>
   )
}

export default Banner