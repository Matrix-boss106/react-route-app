import React from 'react'

function Button({text, width}) {
  return (
    <>
        <button className='btn' style={{
            width: width || "",
            background: "steelblue",
            color: "white",
            border: "none",
            borderRadius: "32px",
            padding: "1rem"

        }}>{text}</button>
    </>
  )
}

export default Button