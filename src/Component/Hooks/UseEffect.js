import React,{useEffect,useState} from 'react'

function UseEffect() {
    const [count,setCount]= useState(0);
    const [item,setItem]= useState(0);


    useEffect(()=>{
        console.log('count useeffect');

    },[count])
    useEffect(()=>{
        console.log('set item useeffect');

    },[item])
    console.log('render')
  return (
    <>
    <h1>use effect</h1>
    <h1>User Effect {count} </h1>
      <button onClick={()=>setCount(count+1)}>Update Counter</button>
      <br></br>
      <button onClick={()=>setItem(item+1)}>Update item</button>


    </>
    
  )
}

export default UseEffect