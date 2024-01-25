import React,{useEffect, useState} from 'react'
import {json} from "react-router-dom";

function UseEffect1() {
    const [content,setContent] = useState("posts");
    const [count,setCount] = useState(0);
    const [items,setItems] = useState([])//for displaying the data on screen
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/" + content).then((response) =>
         response.json()

         //.then(json=>console.log(json))
         .then(json=>setItems(json))// for displaying



        );
    },[content]);
    console.log(items)// for displaying

  return (
    <>
    <button onClick={()=> setContent("posts")}>posts</button><br/><br/>
    <button onClick={()=> setContent("users")}>users</button><br/><br/>
    <button onClick={()=> setContent("comments")}>comments</button><br/><br/>
    <h1>{content}</h1>
    <button onClick={()=> setCount(count + 1)}>count {count}</button><br/><br/>
    <ul>
        {
            items && items.map(a=>{
                return <li>{a.name}</li>
            })
        }
    </ul>
    </>
  )
}

export default UseEffect1