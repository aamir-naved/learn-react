import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todo'

/*
This code represents the main entry point of a React application (App component) and how it incorporates other components (AddTodo and Todos). Let's break it down:
*/
/*

Redux toolkit ki notes
1. Create Store - single source of truth
it has configureStore
introduce reducer

2. Create Slice(functions) method(createSlice)
Slice has name, initialState, reducers :{key: function}
Access of two things (State, action)
state = state value in the store
action = action.payload 
export individual functionality 
export main source export

3. Add Todo - Give values to State i.e Dispatch Courier  = use method useDispatch()
 dispatch(addTodo())

4. Take Values - useSelector((state) =>state.todos) state ka access chaiye
variable me values lelo ek baar aagaie uske baad pure JS concept hai 

Note: Todo's Project basic nai hote xD  :)
*/

function App() {

  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

/*
The App function is a React functional component representing the main application component.
It returns JSX code, which represents the structure and content of the application.
The JSX includes an <h1> heading with the text "Learn about redux toolkit", followed by the <AddTodo> and <Todos> components.
These components are used as custom HTML elements within the JSX, and they will be rendered by React in the appropriate positions within the application.
*/

export default App

/*
In summary, the App component serves as the main container for the React application. It renders an <h1> heading and includes the AddTodo and Todos components, which are responsible for adding todos and displaying the todo list, respectively. This structure allows for modularization and separation of concerns within the application, making it easier to manage and maintain.
*/