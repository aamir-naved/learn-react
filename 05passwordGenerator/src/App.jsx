import { useState, useCallback, useEffect, useRef } from "react"
function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("")

  /*
Uses the useState hook to manage state variables:
length: Represents the length of the generated password.
numberAllowed: Indicates whether numbers are allowed in the password.
charsAllowed: Indicates whether special characters are allowed in the password.
password: Represents the generated password.
  */

  // useRef
  // need to create a variable to use it.

  const passwordRef = useRef(null); // no default value right now

  /*
Uses the useRef hook to create a reference to the password input element.
This reference is later used for selecting and copying the password to the clipboard.
  */
  /*
useRef hook, UI pe kisi bhi element ka reference de deta hai,(woh jaake pass karna hota hai tab lagega)
phir uss element ke saath manupulation kar sakte,
  */


/*
Uses the useCallback hook to memoize the copyPassToClip function.
Memoization ensures that the function is not recreated on each render unless its dependencies (password) change.
*/
  const copyPassToClip = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0,20);
    /*
    bina upar waale line ke likhe bhi kaam kar raha hai,
    but, aise dikhta nhi ki copy hua hai yaa nahi,
    copy to ho jaata,
    but ref actually helps us to enhance the user experience.
    also, current?.select() , yahan jo ? hai, uska matlab ki optional select,
    in case agar value nhi hai toh usse case me.

    current?.setSelectionRange(0,20); isse sirf 20 value hi select hogi.
    */
    window.navigator.clipboard.writeText(password);
  },[password])

  /*
useCallback hook is used for optimization, memoization,
yeh cache me rakhta method ko , 
agar koi aisa method hai jo baar baar hi call hona hai,
to useCallback hook will help to memoize it, and optimize it
  */

/*
Defines a function passwordGenerator to generate a password based on user preferences.
Memoizes the function using useCallback to prevent unnecessary re-renders.
*/
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    if(numberAllowed) str += "0123456789"
    if(charsAllowed) str += "!@#$%^&*"

    for(let i = 1; i<=length; i++){
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);

  },[length,numberAllowed,charsAllowed,setPassword])
/*

passwordGenerator()

Ab jab page load ho to hum chahte ki yeh upar waala method call ho jaaye,
to directly bas call nhi sakte cause they you will get an error
Too many renders, react limits the number of renders to prevent an infinite loop.
*/
/*

jab bhi page load hota, useEffect call hota.
useEffect hook ka kaam hai ki agar kuch bhi change aaya dependencies me
jo ki 2nd arg me diya hai array me, toh agar koi bhi change aaya,
to yeh method jo first arg me hai usse phir se call kar do.

useEffect se koi variable banane ki jrurat nahi hai.

array ke andar hum log dependency dete, ki kis variable me yaa kis method ke 
trigger hone pe call karna hai.

*/

/*
Uses the useEffect hook to generate a password when the component mounts or when any of the dependencies (length, numberAllowed, charsAllowed) change.
Ensures that the password is updated based on user preferences.
*/
useEffect(() => {
  passwordGenerator();
},[length,numberAllowed,charsAllowed,passwordGenerator,setLength])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-800'>
      <h1 className="text-white text-center my-3">Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input 
        type='text' 
        value={password} 
        className="outline-none w-full py-1 px-3"
        placeholder="Password"
        readOnly 
        // ek reference pass karenge , this is related to use of useRef hook
        ref={passwordRef}
        />

        <button
        onClick={copyPassToClip}
        className="outline-none bg-blue-500 text-white px-3 py-0.5 shrink-0"
        >Copy</button>
      </div> 
      <div className="flex text-sm gap-x-2"> 
      <div className="flex items-center gap-x-1">
        <input type="range"
        min={6}
        max={100}
        value={length}
        className="cursor-pointer" 
        onChange={(e) => {setLength(e.target.value)}}
        />
        <label>Length:{length}</label>
        </div>  
        <div className="flex items-center gap-x-1">
          <input
             type="checkbox"
             defaultChecked={numberAllowed}
             id="numberInput"
             onChange={() => {
              setNumberAllowed((prev) => !prev);
             }} />
             <label>Numbers?</label>
        </div>

          <div className="flex items-center gap-x-1">
            <input
              type="checkbox"
              defaultChecked={charsAllowed}
              id="charInput"
              onChange={() => {
                setCharsAllowed((prev) => !prev);
              }} />
            <label>Characters?</label>
          </div>
      </div> 
    </div>
    </>
  )
}

/*
Reasoning:
State Management:

Reasoning: Using state variables to manage password length, inclusion of numbers and special characters, and the generated password allows for dynamic updates based on user input.
Effect on Application: Enables users to customize the password generation process according to their preferences, enhancing the flexibility and usability of the application.
Ref for DOM Manipulation:

Reasoning: Using a ref to reference the password input element allows for DOM manipulation, such as selecting and copying the generated password to the clipboard.
Effect on Application: Enhances user experience by providing a convenient way to copy the generated password without requiring manual selection.
useCallback for Function Memoization:

Reasoning: Memoizing functions like copyPassToClip and passwordGenerator using useCallback prevents unnecessary re-renders and optimizes performance.
Effect on Application: Improves application efficiency by avoiding redundant function creations, leading to smoother user interactions and better overall performance.
Effect for Initial Password Generation:

Reasoning: Using useEffect to trigger password generation ensures that a password is generated when the component mounts or when user preferences change.
Effect on Application: Provides users with an initial password and updates it dynamically based on any changes to the password generation criteria, ensuring that the generated password always reflects the latest preferences.
*/

export default App
