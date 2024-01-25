import React from 'react'

function Updatevariable() {
    let data = 'ram'
    function updatedata(){
        data = 'rohit'
        alert(data)
    }
  return (
    <>
    <h1>click function use</h1>
    <h2>{data}</h2>
    <button onClick={updatedata}>click me</button>

    </>
  )
}

export default Updatevariable