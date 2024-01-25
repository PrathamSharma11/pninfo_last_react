import React from 'react'

function Props(props) {
    //console.log(props);
  return (
    <>
        <h1>Props</h1>
        <h1>{props.title}</h1>
        <h2>{props.phone}</h2>
    </>
  )
}

export default Props