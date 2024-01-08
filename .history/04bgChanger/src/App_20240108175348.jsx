import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('Olive');
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}></div>
  )
}

export default App