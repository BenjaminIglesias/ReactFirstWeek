import { useEffect, useState } from "react";

export default function JokeChuck(){
    const [joke, setJoke] = useState("");
    const [dadJoke,setDadJoke] = useState("");

    
    useEffect(() => {

        function getDadJoke(){ fetch("https://icanhazdadjoke.com/", {
             "headers": {
              'Accept': 'application/json'
             }
          })
          .then(response => response.json())
          .then(data => {
           setDadJoke(data.joke)
            });
     
         }

         const interval = setInterval(() => {
            getDadJoke();
        }, 10000);
        
        return () => {
            clearInterval(interval)
        }
      })
    return(
        <div>
   <button onClick={() => {
    fetch('https://api.chucknorris.io/jokes/random').then(res => res.json()).then(data => {
    setJoke(data.value);
    })}}>Get new Chuck Norris joke</button> 
    <h5>{joke}</h5>
    <h2>Dad Joke:</h2>
   <h5>{dadJoke}</h5> 
    </div>
    );

}


