import React,{useState} from 'react'

function UseState() {
    // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  return (
    <>
        <h1>Use State</h1>
        <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </>
  )
}

export default UseState