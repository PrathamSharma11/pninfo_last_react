import React,{useState} from 'react'

function Countstate() {
    const [count,setCount] = useState(0)
  return (
    <>
    <h1>you clicked {count}</h1>
    <button onClick={()=> setCount(count+1)}>click me</button>

    </>
  )
}

export default Countstate