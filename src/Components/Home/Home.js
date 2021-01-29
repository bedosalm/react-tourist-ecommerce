import React , {useState} from "react";
import Header from "../Header/Header";
import Banner from "../Banner/Banner"
import  "./Home.css";
import {Link} from "react-router-dom";
import Services from "../Services/Services";
import FeatcherdRoom from "../FeatcherdRooms/FeatcherdRoom";

const Home = () => {

    return (
        <>
        <Header>
           <Banner title="ILEXA ROOMS" 
           subTitle="ilexa rooms starting at 30$">
              <Link className="btn-primary" to="/">
              Back Home
              </Link>
           </Banner>
        </Header>
        <Services />
        <FeatcherdRoom/>
        
        </>
   )
}

export default Home