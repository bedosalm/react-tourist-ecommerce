import React from "react";
import './Title.css'

const Title = ({title,children}) => {
    return (
       <h1 className={title}>{children}</h1>
    )
}

export default Title;