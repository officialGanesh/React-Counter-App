import './App.css';
import React, { useState } from 'react';

function App() {

  const [count, setCount] = useState(0)

  // Decrease count
  const decreaseCount = () => {
    setCount(count-1)
  }
  // Reset count to 0
  const resetCount = () => {setCount(0)}
  // Increase count
  const increaseCount = () => {setCount(count+1)}

  const myStyle = {
      maxWidth:"55rem",
      marginTop:"16rem",
      marginLeft:"30rem",
      textAlign:"center"

  }

  const styleValue = {
    marginBottom:"3rem",
    fontSize:"8rem"
  }

  return (
    <>
        
    <div className="container" style={myStyle}>

      <div id="counter-value">
        <h1 style={styleValue}>{count}</h1>
      </div>

      <div>
        <button className='btn btn-success mx-4' onClick={decreaseCount}>Decrease</button>
        <button className='btn btn-primary mx-4' onClick={resetCount}>Reset</button>
        <button className='btn btn-danger mx-4' onClick={increaseCount}>Increase</button>
      </div>

    </div>
    
    </>
  );
}

export default App;
