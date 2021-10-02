import React from 'react'

function index(props) {
  return (
  <div> <input onChange={e=>{props.onChange(e.target.value)}} /></div>
  )
}

export default index
