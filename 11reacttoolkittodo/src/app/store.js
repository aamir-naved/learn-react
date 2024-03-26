import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer
})

/*
import { configureStore } from '@reduxjs/toolkit';:

This line imports the configureStore function from the @reduxjs/toolkit package. Redux Toolkit is the official, opinionated, batteries-included toolset for efficient Redux development.
import todoReducer from '../features/todo/todoSlice';:

This line imports a reducer function from a file located at ../features/todo/todoSlice. In Redux, reducers are functions that specify how the application's state changes in response to actions sent to the Redux store.
export const store = configureStore({ reducer: todoReducer }):

This line configures the Redux store using the configureStore function.
The configureStore function expects an object as an argument, and one of the properties of this object is reducer.
Here, todoReducer is passed as the value for the reducer property. This means that the state updates for this store will be handled by the todoReducer.
Finally, the configured store is exported as store, making it available for use in other parts of the application.
In summary, this code sets up a Redux store using Redux Toolkit's configureStore function and a reducer function (todoReducer) imported from a separate file. The todoReducer is responsible for managing state changes related to todos in the application.
*/