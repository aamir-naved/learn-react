import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../features/todo/todoSlice'

function AddTodo() {

    const [input, setInput] = useState('')
    /*
    This line initializes a piece of local state using the useState hook provided by React.
input represents the current value of the input field for adding todos.
setInput is a function provided by React to update the input state variable.
Initially, the input state is set to an empty string ('').
    */
    const dispatch = useDispatch()

    /*
This line initializes the dispatch function using the useDispatch hook provided by react-redux.
dispatch is a function that allows components to dispatch actions to the Redux store.
    */

    const addTodoHandler = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

    /*
This function is triggered when the form is submitted.
e.preventDefault() prevents the default form submission behavior, which causes a page reload.
dispatch(addTodo(input)) dispatches an action to add a new todo to the Redux store. The addTodo action creator is called with the current value of the input state as its argument.
setInput('') clears the input field by updating the input state to an empty string.
    */

    return (
        <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Enter a Todo..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo

/*
This JSX code represents the UI rendered by the AddTodo component.
It consists of a <form> element containing an <input> field and a <button> element.
The onSubmit event of the form is set to trigger the addTodoHandler function when the form is submitted.
The <input> field is a controlled component where its value is bound to the input state variable. The onChange event handler updates the input state as the user types.
The <button> triggers the form submission when clicked.
In summary, this component manages the state of an input field for adding todos using React's useState hook. It dispatches an action to add a new todo to the Redux store when the form is submitted. The UI is rendered using JSX, and event handlers are set up to handle user interactions.

*/