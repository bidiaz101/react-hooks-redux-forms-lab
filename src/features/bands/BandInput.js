import React, { useState } from "react";

function BandInput({ onBandSubmit }) {
  const [name, setName] = useState('')

  function handleChange(e){
    setName(e.target.value)
  }

  function handleSubmit(e){
    e.preventDefault()
    onBandSubmit(name)
    setName('')
  }

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor='name' >name</label>
      <input type='text' onChange={handleChange} value={name} id='name' />
      <input type='submit' value='add band' />
    </form>
  )
}

export default BandInput;
