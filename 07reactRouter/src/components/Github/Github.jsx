import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

/*
useState:

Purpose: useState is a React hook used for managing state in functional components. It allows you to declare state variables and update them, triggering re-renders when the state changes.
Usage: In your code, useState is commented out, but it would be used to store the fetched GitHub user data (data) and a function to update that data (setData).
useEffect:

Purpose: useEffect is a React hook used for handling side effects in functional components. It allows you to perform actions such as data fetching, subscriptions, or manually changing the DOM after the component has rendered.
Usage: In your code, useEffect is used to fetch GitHub user data (data) from the API endpoint https://api.github.com/users/aamir-naved when the component mounts ([] as the dependency array means it runs only once after the initial render).
useLoaderData:

Purpose: useLoaderData is a custom hook provided by the react-router-dom library. It is typically used in server-side rendering (SSR) scenarios to access data fetched during server rendering.
Usage: In your code, useLoaderData is used to access the data fetched during server rendering. It's not explicitly shown how the data is fetched and provided to the hook, but it's commonly used in SSR setups to provide initial data to components.
These hooks are essential for managing state, handling side effects, and accessing router-related data in React functional components. They make it easier to write clean, functional code with React.ˀ
*/

function Github(){

    //   const [data, setData] = useState("");
    //  useEffect(() => {
    //     fetch('https://api.github.com/users/aamir-naved')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data);
    //     })
    //  },[])

     const data = useLoaderData();

     /*
Definition:

The useLoaderData function would be defined as a JavaScript function, possibly within the react-router-dom library.
Accessing Router Data:

Internally, useLoaderData may access router-related data, such as route parameters, location information, or data fetched during server-side rendering (SSR). This might involve interacting with the React Router context or accessing props provided by a router component.
Return Value:

The function would return some data or state obtained from the router context or from other internal mechanisms. This data could be used by components that call useLoaderData.
Usage:

Components using useLoaderData would call it within their functional component body. This hook would then provide them with the data or state they need, allowing them to render based on that data.
Custom Logic (Optional):

Depending on the specific use case, useLoaderData might include additional custom logic, such as data transformation, caching, or error handling, to ensure that the data provided to components is accurate and reliable.

Overall, the useLoaderData hook abstracts away the complexity of accessing router-related data or performing specific tasks related to routing in React applications, providing a cleaner and more reusable solution for components that need access to such data.
     */

     return (
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            <img src={data.avatar_url} alt="Git Picture" width={300} />

            Name: {data.name}
            <br />
            Bio: {data.bio}
        </div>
     )


}

export default Github;

export const fetchGitHubInfo = async () => {
 
    const response = await fetch('https://api.github.com/users/aamir-naved');

    return response.json();

}

/*
export const fetchGitHubInfo: This line exports a function named fetchGitHubInfo as a named export from the module. Named exports allow you to export multiple functions or variables from a module.

async () => { ... }: This is an arrow function expression defined asynchronously. It means that this function will execute asynchronously, allowing the use of the await keyword inside it.

const response = await fetch('https://api.github.com/users/aamir-naved'): This line performs an asynchronous HTTP request to the GitHub API endpoint https://api.github.com/users/aamir-naved using the fetch function. The await keyword is used here to wait for the response to be received before proceeding further. This line returns a Promise that resolves to a Response object.

return response.json(): This line extracts the JSON body content from the HTTP response received from the GitHub API. The json() method of the Response object parses the response body as JSON, returning another Promise that resolves to the parsed JSON data. This parsed JSON data is then returned by the fetchGitHubInfo function.

In summary, the fetchGitHubInfo function is a named export that asynchronously fetches information about a GitHub user named "aamir-naved" from the GitHub API. It returns a Promise that resolves to the JSON data containing the user's information.
*/