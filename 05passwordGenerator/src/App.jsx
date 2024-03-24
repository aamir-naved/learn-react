import { useState, useCallback, useEffect, useRef } from "react"
function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charsAllowed, setCharsAllowed] = useState(false);
  const [password, setPassword] = useState("")

  // useRef
  // need to create a variable to use it.

  const passwordRef = useRef(null); // no default value right now

  /*
useRef hook, UI pe kisi bhi element ka reference de deta hai,(woh jaake pass karna hota hai tab lagega)
phir uss element ke saath manupulation kar sakte,
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

export default App
