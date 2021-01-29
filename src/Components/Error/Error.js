import React , {useState , useEffect} from "react";
import {Link} from 'react-router-dom';
import Banner from "../Banner/Banner";
import Header from "../Header/Header";
import Rooms from "../Rooms/Rooms";

const Error = () => {


  return (
      <>
      <Header>
        <Banner title="404" subTitle="page not Found">
          <Link to="/" className="btn-primary">
            Home Page
          </Link>
        </Banner>
      </Header>
      </>
  )
}

export default Error