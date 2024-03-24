import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'


function App() {
  
  let myObj ={
    userName: "Aamir",
    age: 25
  }

  let newArray = [1,2,3]

  return (
   <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind CSS test</h1>
      <Card userName="Aamir" btnText="Visit Me" newArr={newArray}/>
      {/* this is passing props */}
      <Card userName="Naved"  someObj={myObj}/>

   </>
  )
}

export default App
// export default BgChanger
