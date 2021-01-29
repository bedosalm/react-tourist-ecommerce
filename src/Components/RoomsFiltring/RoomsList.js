import React from 'react';
import Room from '../Room/Room';

function RoomsList({roomsList}) {
    if(roomsList.length == 0){
        return (
            <h1>your Filter search not match</h1>
        )
    }
    return (
        <section className="feature-content">
             <div className="items">
            {roomsList.map((item,index) => {
                 return(
                <Room key={index} room={item}/>
                )
            })

            }
             </div>
       </section>
    );
}

export default RoomsList;