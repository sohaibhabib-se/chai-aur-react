import { useState, useCallback } from 'react'

import './App.css'

const App = () => {

  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLNOPQRSTUVWXYZabcdgefghijklnmopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`"
    

    for(let i = 1; i<= Array.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass = str.charAt(char)
    }

    setPassword(pass)


  }, [length, numberAllowed, charAllowed, setPassword])
  return (
    // <h1 className='text-4xl text-center text-white'>Password Generator</h1>

    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-700'> Test</div>
    <div className=' flex shadow rounded-lg overflow-hidden mb-4'>
      <input type='text'
    </div>
  )
}

export default App