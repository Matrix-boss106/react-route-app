import { useState } from 'react'

function Services() {
  const [count, setCount] = useState(0)
  const [text, setText] = useState("")

  const boxStyle = {
    width: "50%",
    color: "white",
    height: "50%",
    margin: "10% auto",
    borderRadius: "10px",
    padding: "10%",
    background: "#222",
    textAlign: "center"
  }

  const btnStyle = {
    width: "100px",
    border: "none",
    boxShadow: "0 0 200 pink",
    borderRadius: "64px",
    padding: "1rem",
    margin: "10px",
    background:"steelblue"
  }

  const textStyle = {
    margin: "1rem",
    padding: "1rem",
    fontWeight: "800",
    color: "crimson",
    border: text ? "2px dashed" : "none"
  }
  const addHandler = () => {
    setCount(count => count + 1)
    setText("")
  }
  const subHandler = () => {
    if (count === 0) {
      setText("count cannot be negetive");
      return;
    }
    setCount(count => count - 1)
    setText("")
  }
  return (
    <div style={boxStyle}>
      <h1>Counter App</h1>
      <p>Click the "ADD" button to increase this number abd "Sub" button to decrease the number</p>
      <button style={btnStyle}  onClick={addHandler} >  ADD</button>

      <button style={btnStyle}>{count}</button>

      <button style={btnStyle} onClick={subHandler}> Sub</button>
      <div style={textStyle}>{text}</div>
    </div>
  )
}

export default Services