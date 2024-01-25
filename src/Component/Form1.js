import React,{useState} from 'react'

function Form1() {
    const [username,setusername]= useState()
    const [password,setpassword]= useState()

    const submitHandlerData = (e)=>{
      e.preventDefault()
      console.log(username,password);

    }

  return (
    <>
    <h1>FORM</h1>
    <div>
       <form onSubmit={submitHandlerData}>
       <div className='mb-3'>
        <label htmlFor=''>username</label>
        <input onChange={(e)=>setusername(e.target.value)}className='form-control' type='text'/>
       </div>

       <div className='mb-3'>
        <label htmlFor=''>Password</label>
        <input onChange={(e)=>setpassword(e.target.value)} className='form-control' type='password'/>

       </div>
       <button type='submit'>submit</button>
       </form>
    </div>

    </>
  )
}

export default Form1