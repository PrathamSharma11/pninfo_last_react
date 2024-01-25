import React, {useState}from 'react'

function Showhide() {
    const [status,setstatus] = useState(true)
  return (
    <>
    {status ? <h1>hello gwalior</h1> :null}
    
    <button className='btn btn-danger' onClick={()=>setstatus(false)}>hide</button>
    <button className='btn btn-success' onClick={()=>setstatus(true)}>show</button>
    <button className='btn btn-info' onClick={()=>setstatus(!status)}>toggle</button>


    </>
  )
}

export default Showhide