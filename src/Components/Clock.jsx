// import required modules....
import React, { useState, useEffect } from 'react';


// create clock component and export it....
export default function Clock() {

    // use useState hook to intiate value and then save uptated new value in setClock....
    const [clock , setClock] = useState();

    // use useEffect hook in component lifeCycle with each rendering execute the setInterval function....
    useEffect(()=>{

        // executing every 1 sec with the local time
        setInterval(()=>{
            const time = new Date();
            setClock(time.toLocaleTimeString());
        }, 1 * 1000);
    },[]);

    // return jsx content with inside styling....
  return (
    <div>
      <div style={{ 
        fontSize: '100px',
        margin: '0',
        background: 'blue',
        color: 'white',
        padding: '50px',
        width: '100%',
        height: '300px',
        borderRadius: '0px'
        }}>
          <div>
            {clock}
          </div>
          <h1 style={{marginBottom: '0px', padding: '0', fontSize:'100px'}}>Simple Digital Clock</h1>
      </div>
    </div>
  )
}
