import { createContext, useContext } from "react"
/*
The code imports createContext and useContext from the React library.
createContext is used to create a new context object, and useContext is a hook that allows components to consume values from a context.
*/
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => { },
    updateTodo: (id, todo) => { },
    deleteTodo: (id) => { },
    toggleComplete: (id) => { }
})

/*
createContext is called to create a new context object named TodoContext.
The initial value provided to the context consists of:
todos: An array containing an initial todo item for demonstration purposes.
addTodo, updateTodo, deleteTodo, and toggleComplete: Placeholder functions for adding, updating, deleting, and toggling completion of todo items.
*/


export const useTodo = () => {
    return useContext(TodoContext)
}

/*
useTodo is a custom hook created to consume the TodoContext.
It uses the useContext hook to access the current value of the TodoContext.
This hook can be used in functional components to access the todo context and its values.
*/

export const TodoProvider = TodoContext.Provider

/*
TodoProvider is a component created by accessing the Provider property of the TodoContext.
This component is used to provide the context value to its descendants.
It's a shorthand way to access the Provider component of the TodoContext.


In summary, this code establishes a context (TodoContext) for managing todo items in a React application. It provides a default context value with placeholder functions for adding, updating, deleting, and toggling todo items. Additionally, it exports a custom hook (useTodo) for consuming the context and a shorthand way (TodoProvider) to access the Provider component of the context.

*/