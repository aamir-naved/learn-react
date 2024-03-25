import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
import Github , {fetchGitHubInfo}from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Layout/>,
//     children: [
//     {
//       path: "",
//       element: <Home />
//     },
//       {
//         path: "about",
//         element: <About />
//       },

//       {
//         path: "contact",
//         element: <Contact />
//       }
//     ]
//   }
// ]);


const router = createBrowserRouter(
  createRoutesFromElements(
  <Route path='/' element={<Layout/>}>
     <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />

{/* Saare routes ke andar nesting ho sakti, jaise upar waale me hua hai. 
For example agar about waale me nesting karni hai to ,
isse self closing se hata ke wrap waala kar do like this

<Route ab iske andar about ke aage ka path de do > </Route>
*/}


      <Route path='contact' element={<Contact />} />

      <Route path='user/:userId' element={<User />} />
      <Route
        loader={fetchGitHubInfo}
       path='github' 
       element={<Github />} />

       {/* 
       <Route>: This component is used to define a route in the application. It takes several props to determine how and when to render its associated component.
path='github': This prop specifies the URL path at which the component should be rendered. In this case, it's set to '/github', so whenever the URL matches this path, the component will be rendered.
element={<Github />}: This prop specifies the component to be rendered when the URL matches the given path. In this case, it's set to render the Github component.
Asynchronous Loading:

loader={fetchGitHubInfo}: This prop specifies a function (fetchGitHubInfo) to be called to load data asynchronously before rendering the associated component (Github).
fetchGitHubInfo: This is likely a function that fetches data from the GitHub API or some other source. It's asynchronous, meaning it doesn't block the rendering process while data is being fetched.
Internal Working:

When the URL matches the path specified (/github), React Router will trigger the rendering of the associated component (Github).
Before rendering the Github component, React Router will call the fetchGitHubInfo function specified in the loader prop.
The fetchGitHubInfo function fetches data asynchronously. Once the data is fetched successfully, it will be passed as props to the Github component.
Finally, React Router will render the Github component with the fetched data.
Concept:

The concept here is to lazily load data for a specific route/component only when it's needed. By using the loader prop, you can specify a function to fetch data asynchronously before rendering the component. This is useful for improving performance by avoiding unnecessary data loading until the component is actually going to be rendered.
In summary, this code sets up a route in a React application using React Router. It renders the Github component when the URL matches '/github', and it asynchronously fetches data using the fetchGitHubInfo function before rendering the component. This approach ensures that data is loaded only when necessary, optimizing performance and user experience.
       
       */}



  </Route>)
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

/*

Imports:

React: This imports the React library, allowing you to define React components.
ReactDOM: This imports the ReactDOM library from 'react-dom/client'. It's used for rendering React components into the DOM.
'./index.css': This imports a CSS file for styling the application.
{ Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom': These imports various components and functions from the react-router-dom library for setting up routing in the application.
Components: This imports various components like About, Home, Layout, Contact, User, and Github from their respective files.
Routing Setup:

The routing setup is done using the createBrowserRouter function along with createRoutesFromElements. It defines routes for different paths in the application.
Routes are defined hierarchically, with the top-level route wrapping the <Layout/> component, which likely provides a common layout structure for all pages.
Nested routes are defined within the children array of each parent route, specifying the path and the component to render for each route.
The loader prop is used to specify a function (fetchGitHubInfo) to load data asynchronously before rendering the Github component.
Rendering:

ReactDOM.createRoot().render(): This renders the root component of the application into the DOM.
<React.StrictMode>: This wraps the RouterProvider component, enabling React's strict mode for additional checks and warnings during development.
<RouterProvider router={router}/>: This provides the router instance (router) to the entire application using the RouterProvider component.

*/
