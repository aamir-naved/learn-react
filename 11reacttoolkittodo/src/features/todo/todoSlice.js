import { createSlice, nanoid } from '@reduxjs/toolkit';

/*
This line imports two functions, createSlice and nanoid, from the @reduxjs/toolkit package.
createSlice is a function provided by Redux Toolkit for creating Redux slices, which are pieces of Redux state that have their own reducer functions and actions.
nanoid is a function provided by Redux Toolkit to generate unique identifiers for todos.
*/

const initialState = {
    todos: [{ id: 1, text: "Hello world" }]
}

/*
This object defines the initial state of the todo slice.
It contains a single todo item with an id of 1 and a text of "Hello world".
This serves as the starting point for the todo slice's state.

The initialState object represents the initial state of the todo slice.
It contains a todos array with one initial todo item for demonstration purposes.
*/



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    }
})

/*
The createSlice function is called with an object that contains configuration options for the slice.
name: The name of the slice. This is used to generate action types and identify the slice in the Redux store.
initialState: The initial state of the slice.
reducers: An object containing reducer functions. These functions define how the state should be updated in response to dispatched actions.
addTodo: This reducer function is responsible for adding a new todo item to the todos array in the state. It generates a unique ID for the todo using nanoid and adds the todo with the provided text to the array.
removeTodo: This reducer function is responsible for removing a todo item from the todos array based on its ID. It filters out the todo with the ID provided in the action payload.
*/

export const { addTodo, removeTodo } = todoSlice.actions

export default todoSlice.reducer

/*
The actions property of the todoSlice object contains action creators generated automatically by createSlice. These action creators can be directly exported for use in other parts of the application.
addTodo and removeTodo are the action creators for adding and removing todo items, respectively.
The reducer property of the todoSlice object contains the reducer function generated by createSlice. This reducer function is exported as the default export of the module.
*/

/*
In summary, this code defines a Redux slice called todoSlice using Redux Toolkit's createSlice function. The slice contains initial state, reducer functions for adding and removing todo items, and automatically generated action creators. This approach simplifies the process of managing Redux state by reducing boilerplate code and providing a more intuitive API for defining slices and actions.
*/

/*
Let's break down some of the terminologies used in the provided code snippet with simple definitions and analogies:

Slice:

Definition: In Redux, a "slice" represents a portion of the application state and includes the logic for updating that portion of the state.
Analogy: Imagine you have a cake, and you want to cut it into slices. Each slice represents a different part of the cake. Similarly, in Redux, a slice represents a portion of the application state. You can have multiple slices, each responsible for managing a specific part of the state.
Reducer:

Definition: A "reducer" is a function that specifies how the application's state changes in response to actions sent to the Redux store.
Analogy: Think of a reducer as a chef in a kitchen. When you order a dish, the chef takes the raw ingredients (current state) and follows a recipe (action) to prepare the dish (new state). Similarly, a reducer takes the current state and an action as input and produces a new state as output.
Action Creator:

Definition: An "action creator" is a function that creates and returns an action object, which describes the intention to change the state.
Analogy: Suppose you want to send a message to your friend. You write down the message (create an action object) and put it in an envelope (call the action creator). Then, you send the envelope (dispatch the action) to your friend. In Redux, the action creator is like writing the message, and dispatching the action is like sending the envelope.
Initial State:

Definition: "Initial state" refers to the starting state of the application before any actions are dispatched.
Analogy: Imagine you're playing a video game. When you start a new game, you begin with certain default settings and conditions (initial state). As you progress through the game and take actions, the game state changes based on those actions.
Dispatch:

Definition: "Dispatch" is a function provided by Redux that sends an action to the Redux store. It is used to trigger state changes.
Analogy: Think of dispatching as pressing a button. When you press a button (dispatch an action), you activate a mechanism (reducer) that performs a specific action or task. Similarly, in Redux, dispatching an action triggers the associated reducer to update the state.
*/