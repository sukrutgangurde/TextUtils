import React, {useState} from "react";


export default function TextForm(props) {
    const [text, setText] = useState('Enter Your Text Here')

    const upperClick = ()=>{
        // console.log("Upper Case Clicked!!!!!")
        let newText = text.toUpperCase()
        setText(newText)
    }

    const lowerClick = ()=>{
        // console.log("Upper Case Clicked!!!!!")
        let newText = text.toLowerCase()
        setText(newText)
    }

    const handleChange = (event)=>{
        console.log("Changes Made!!!!")
        setText(event.target.value);
    }



    return (
    <>
      <h4>{props.heading}</h4>
      <div className="mb-3">
        <textarea className="form-control" id="myBox" rows="6" value={text} onChange={handleChange}></textarea>
        <button className="btn btn-primary my-2" onClick={upperClick}>Convert to UpperCase</button>
        <button className="btn btn-primary my-2 mx-2" onClick={lowerClick}>Convert to LowerCase</button>
      </div>
    </>
  );
}