import React, { useState } from 'react'

export default function TextForm(prop) {

  const Lowercase=()=>{
    setText(text.toLowerCase())
  }
  let mode11=""
  const convertupper = () => {
    let newtext = text.toUpperCase()
    setText(newtext)
  }
  const handleOnChange = event => {
    setText(event.target.value)
  }

  const afterChange = () => {
    setText(text.replaceAll(word, wordTo))
  }
  const wordTochange = event => {
    getWord(event.target.value)
  }
  const changeWord = event => {
    getWord2(event.target.value)
  }
  const style = {
    backgroundColor: "white",
    color: "black"
  }
  const style1 = {
    backgroundColor: "black",
    color: "white"
  }

  const [wordTo, getWord2] = useState("");
  const [word, getWord] = useState("");
  const [text, setText] = useState("");
  return (
    <div style={prop.mode === "light" ? style : style1}>
      <h1>{prop.heading}</h1>
      <div className="mb-3" style={prop.mode === "light" ? style : style1}>
        <textarea className="form-control" value={text} onChange={event => handleOnChange(event)} id="MyText" rows="8" style={prop.mode === "light" ? style : style1}></textarea>
      </div>
      <input type="text" className="mx-2" placeholder='Text to Replace' value={word} onChange={event => wordTochange(event)} />
      <input type="text" className="mx-2" placeholder="replaced text" value={wordTo} onChange={event => changeWord(event)} />
      <button type="submit" className="btn btn-primary mx-2" onClick={convertupper} >Convert to Uppercase</button>
      <button type="submit" className="btn btn-primary mx-2" onClick={Lowercase} >Convert to Lowercase</button>
      <button type="submit" className="btn btn-primary mx-2" onClick={afterChange} >Replace</button>
      <p>Total Word:{text.split(" ").filter((element)=>{return element.length!==0}).length} and Letters:{text.replaceAll(" ","").split("").filter((element)=>{return   element.length!==0}).length} </p>
    </div>
  );
}