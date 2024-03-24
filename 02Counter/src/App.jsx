import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // let count = 0;

  const [counter, setCounter] = useState(0);

  const  addValue = () => {
   // not greater than 20
   if(counter < 20){
    // ~
     /*
Aise nahi hoga mulitple update,
React fibre state to batches me update karta hai, 
When it will see that you are doing the same thing again and again,
then it will condider it as one update, cause you are updating the same variable again and again

But if in case there is such need, where you have to follow something like that,
setCounter() issme ek callback milta, jo previous state ko batata yaa previous state fetch karke laata,


     */

setCounter(prevCounter => prevCounter + 1);
/*
Abhi kya ho raha ki we are fetching previous state and then updating it.
*/
     setCounter(prevCounter => prevCounter + 1);
     setCounter(prevCounter => prevCounter + 1);
/*
Now, ab batches me kaam nhi ho raha, we are actually fetching the previous state and then updating it.
*/

   }
    
  }

  const removeValue = () => {
    // not less than 0
    if(counter > 0){
      setCounter(counter - 1);
    }
  }

  return (
    <>
      <h1>Chai Aur React Hooks</h1>
      <h2>Counter Value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
