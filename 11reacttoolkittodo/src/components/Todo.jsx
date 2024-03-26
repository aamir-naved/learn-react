import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

/*
This code imports necessary dependencies.
useSelector is a hook that allows components to extract data from the Redux store state.
useDispatch is a hook that provides access to the Redux store's dispatch function.
removeTodo is an action creator function imported from '../features/todo/todoSlice', which is presumably responsible for removing todos.
*/

function Todos() {
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch();

    /*
This functional component Todos is defined.
useSelector is used to extract the todos array from the Redux store state. It takes a selector function as an argument, which returns the desired part of the state.
useDispatch is called to obtain the dispatch function, which will be used to dispatch actions to the Redux store.
    */



    return (
        <>
            <div>Todos</div>
            <ul className="list-none">
                {todos.map((todo) => (
                    <li
                        className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
                        key={todo.id}
                    >
                        <div className='text-white'>{todo.text}</div>
                        <button
                            onClick={() => dispatch(removeTodo(todo.id))}
                            className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={1.5}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                                />
                            </svg>
                        </button>
                    </li>
                ))}
            </ul>
        </>
    )
}

/*

The component returns JSX, which represents the UI to render.
It displays a heading "Todos" followed by an unordered list (<ul>).
Each todo item is rendered as an <li> element within the list. The todos array is mapped over to generate these list items.
Each list item displays the todo text along with a button to remove the todo.
The onClick event handler of the remove button dispatches the removeTodo action creator with the id of the todo as its argument. This action is responsible for removing the todo from the Redux store.
A unique key is assigned to each list item using the todo.id to ensure efficient list rendering.
*/

export default Todos