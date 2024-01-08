import React, { useState } from 'react'

const App = () => {
  const [color, setColor] = useState('Olive');
  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>Text</div>
    </div>
  )
}

export default App