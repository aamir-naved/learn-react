import React from 'react'
import { useParams } from 'react-router-dom';
/*
Imports:

React: This imports the core React library, necessary for creating React components.
{ useParams } from 'react-router-dom': This imports the useParams hook from the react-router-dom library. This hook allows functional components to access URL parameters.
Functional Component:

The User component is defined as a functional component.
Inside the component, the useParams hook is called to extract the userId from the URL parameters.̉
The userId obtained from URL parameters is then used to display the user ID dynamically within a div element.
Rendering:

The component returns JSX, displaying the text "User: " followed by the userId dynamically obtained from the URL parameters.
Overall, this component is a simple example of how to use React Router's useParams hook to access dynamic route parameters within a React functional component. It renders a UI element displaying the user ID extracted from the URL parameters.

*/


export default function User(){

    const {userId} = useParams();
    return(
        <div className='bg-gray-600 text-white text-3xl'>User: {userId}</div>
    )
    
}