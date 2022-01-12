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

  return (
    <>
        
    <div className="container">

      <div id="counter-value">
        <h1>{count}</h1>
      </div>

      <div>
        <button className='btn btn-success mx-3' onClick={decreaseCount}>Decrease</button>
        <button className='btn btn-primary mx-3' onClick={resetCount}>Reset</button>
        <button className='btn btn-danger mx-3' onClick={increaseCount}>Increase</button>
      </div>

    </div>
    
    </>
  );
}

export default App;
