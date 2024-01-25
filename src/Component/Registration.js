import React,{useState} from 'react'

function Registration() {
    const [username,setusername]= useState()
    const [password,setpassword]= useState()
    const [email,setemail]= useState()
    const [contact,setcontact]= useState()

    const submitHandlerData = (e)=>{
      e.preventDefault()
      console.log(username,password,email,contact);

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
       <div className='mb-3'>
        <label htmlFor=''>Email</label>
        <input onChange={(e)=>setemail(e.target.value)} className='form-control' type='text'/>

       </div>
       <div className='mb-3'>
        <label htmlFor=''>Contact</label>
        <input onChange={(e)=>setcontact(e.target.value)} className='form-control' type='text'/>

       </div>
       
       <button type='submit'>submit</button>
       </form>
    </div>

    </>
  )
}

export default Registration;