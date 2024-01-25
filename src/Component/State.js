import React,{useState}from 'react'

function State() {
    const [data, setdata] = useState('ram')
    function updatedata(){
        setdata("sita")
    }
  return (
    <>
        <h1>state in react</h1>
        <h2>{data}</h2>
        <button onClick={updatedata}>click me</button>
    </>

  )
}

export default State