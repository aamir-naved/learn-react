import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store'

/*
Provider is a component provided by react-redux to pass the Redux store down to the components.
store is the Redux store of the application.
*/

/*
ReactDOM.createRoot(document.getElementById('root')) creates a root element for rendering React content. createRoot is a new API introduced in React 18 for concurrent mode.
.render() is called on the root element to render the application.
*/
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
)

/*
The <Provider> component is used to wrap the <App /> component.
It makes the Redux store (store) available to all components in the application via React's context API. This allows components to access the store's state and dispatch actions without explicitly passing them down through props.
*/