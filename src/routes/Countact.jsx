import React, { useState } from 'react'

function Countact() {
  const [name, useName] = useState('')
  const [email, useEmail] = useState('')
  const [age, useAge] = useState(0)

  const inputStye = {
    padding: "1rem",
    borderRadius: "8px",
  }
  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
    width: "50%",
    marginInline: "auto",
    marginBlock: "200px"
  }

  return (
    <div style={{
      display: "flex",
      paddingInline: "400px",
      gap: "2rem"
    }}>
      <form style={formStyle}>
        <h1>Fill this Form</h1>
        <input onChange={(e) => useName(e.target.value)} style={{ ...inputStye, border: "1px solid orange" }} type="text" placeholder='Enter Name'></input>
        <input onChange={(e) => useEmail(e.target.value)} style={{ ...inputStye, border: "1px solid orange" }} type="email" placeholder='Enter Email'></input>
        <input onChange={(e) => useAge(e.target.value)} style={{ ...inputStye, border: "1px solid orange" }} type="number" placeholder='Enter '></input>
      </form>
      <form style={formStyle}>
        <h1>Fill this Form</h1>
        <input value={name} style={{ ...inputStye, border: "1px dashed red", color:"white"  }} type="text" disabled placeholder='Enter Name'></input>
        <input value={email} style={{ ...inputStye, border: "1px dashed red", color:"white"  }} type="email" disabled placeholder='Enter Email'></input>
        <input value={age} style={{ ...inputStye, border: "1px dashed red", color:"white" }} type="number" disabled placeholder='Enter Age'></input>
      </form>
    </div>
  )
}

export default Countact