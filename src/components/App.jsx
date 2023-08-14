import React, {useState} from 'react';

function App() {
  setInterval(getTime, 1000)
  let time = new Date().toLocaleTimeString();
  let date = new Date().toLocaleDateString();
  const [count, setTime] = useState(time );
  

  function getTime() {
    const updateTime = new Date().toLocaleTimeString();
    setTime(updateTime);
    
  }


  return <div className='container'>
    <h1>{count}</h1>
    <h2>{date}</h2>
    <button onClick={getTime}>Get Time</button>
    
  </div>
};

export default App;