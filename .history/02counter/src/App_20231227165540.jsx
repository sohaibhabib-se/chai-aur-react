
import './App.css'

function App() {

  let counter = 5
  const addValue = () => {
    console.log("value Added", counter)
    counter = counter + 1
  }

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter Value: {counter}</h2>

     <button onClick={addValue}>Add Value</button>
     <br />
     <button>Remove Value</button>
    </>
  )
}

export default App
