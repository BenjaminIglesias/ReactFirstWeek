import {useEffect, useState } from 'react';
import './App.css';
import JokeChuck from './fetchChuckJoke';
import ListDemo from './ListDemo';

const CountComponent =  ({start,change}) => {


  const[count, setCount] = useState(start);
  useEffect(() => {
    setCount(Number(localStorage.getItem("count")));
   },[start]) 
   useEffect(() => {
    localStorage.setItem("count", count);
  },[count]) 
  return (
    <div>
     
<p>You have clicked {count} times</p>  
<button onClick={() => setCount(count + Number(change))}>Click to increase</button>
<button onClick={() => setCount(count + -Number(change))}>Click to decrease</button>
</div>
  )
  
} 


function App() {
  return (
    <div className="App">
    <CountComponent  change='5'/>
    <JokeChuck/>
    <ListDemo/>
    </div>
  );

}

export default App;
