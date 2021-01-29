import React, { useState } from "react";
import { FaAccessibleIcon  , FaCocktail ,FaHiking ,FaShuttleVan} from 'react-icons/fa';
import Title from "../Title/Title";
import "./Services.css"

const services = [
{
    icon : <FaAccessibleIcon />,
    title: "wide spaces",
    text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla eros pulvinar, dignissim nibh ut, ultrices purus. Nunc tincidunt risus risus, vitae luctus purus euismod at.
     Cras auctor nunc eget quam elementum`
},
{
    icon : <FaCocktail />,
    title: "free drinkes",
    text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla eros pulvinar, dignissim nibh ut, ultrices purus. Nunc tincidunt risus risus, vitae luctus purus euismod at.
    Cras auctor nunc eget quam elementum`
},
{
    icon : <FaHiking />,
    title: "endless Hiking",
    text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla eros pulvinar, dignissim nibh ut, ultrices purus. Nunc tincidunt risus risus, vitae luctus purus euismod at.
    Cras auctor nunc eget quam elementum`
},
{   icon : <FaShuttleVan />,
    title: "special transporter",
    text : `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam fringilla eros pulvinar, dignissim nibh ut, ultrices purus. Nunc tincidunt risus risus, vitae luctus purus euismod at.
    Cras auctor nunc eget quam elementum`
}
]

const Services = () => {

    const [data] = useState(services)
    return (
         <div className="services">
             <Title title="title">services</Title>
             <div className="services-conteiner">
             {data.map(res => {
                 const {icon,title,text} = res
                 return(
                    <div key={Math.random() * 5} className="services-Item">
                     <span>{icon}</span>
                     <h3>{title}</h3>
                     <p>{text}</p>
                    </div>
                 )
             })
            }
             </div> 
         </div>
    )
}

export default Services;