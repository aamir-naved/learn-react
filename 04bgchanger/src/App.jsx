import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive");
  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
          onClick={() => setColor("red")}
          /*
           onClick method expects a function, ki usko ek function do, woh click hone pe
           woh function call karega, usse function ki return value nhi chahiye
                     onClick={setColor}
                     aise bhi pass karte to chal jaata, but hume to ek parameter bhi pass karna hai,
                     aur agar aisa kiya 
                               onClick={setColor("red")}
                     toh humne toh function hi call kar diya aur yahan pe uski return value aayegi,
                     jo ki onclick ko chahiye hi nahi,
                     
                     Isiliye we will use this:           onClick={() => setColor("red")}
                     callback function, basically hum log function ke andar dusra function call kar rhe,
                     aur callback function bhi toh function hi hai,
                     isiliye onclick ko isse koi dikkat nhi



          */
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
            onClick={() => setColor("green")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >Green</button>
          <button
            onClick={() => setColor("purple")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "purple" }}
          >Purple</button>
          <button
            onClick={() => setColor("white")}

            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "white" }}
          >White</button>
          <button
            onClick={() => setColor("black")}

            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}
          >Black</button>
          <button
            onClick={() => setColor("yellow")}

            className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
            style={{ backgroundColor: "yellow" }}
          >Yellow</button>

        </div>

       
      </div>

    </div>
  )
}

export default App
