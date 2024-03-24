import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MeraComp from './Mera.jsx'

function MyApp()
{
  return(
    <h1>Hello MyApp !!</h1>
  )
}

// create your own object
// 
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Visit Google'
}

// render basically takes an object and then parses it. but object must follow 
// a certain convention.

const reactElement2 = React.createElement('a',{href: 'https://google.com', target: '_blank'},"Visit Googlee");

// the above object follows a convention.
// because we are using render method of react, we have to pass object as per it's specifications
ReactDOM.createRoot(document.getElementById('root')).render(

<>
    <App />
    <MeraComp />
</>
    
  
    

//  reactElement2

)
