import React, {useState} from 'react';
import './Room.css';

function Room() {
  
    const [isLit, setLit] = useState(false);
    let [temp, setTemp] = useState(22);
    
    return (
    <div className={`span_area ${isLit? "lit" : "dark"}`}>

      This Room is {isLit? "lit": "dark"} 
      <br/>
      and 
      <br/>
      current temperature is {temp} degree celcius.
  
      <br/>
      <button onClick={()=>setLit(!isLit)}>Toggle</button>
      <br/>
      <button onClick={()=>setTemp(++temp)}>Increase Temp</button>
      <br/>
      <button onClick={()=>setTemp(--temp)}>Decrease Temp</button>

    </div>
  );
}

export default Room;