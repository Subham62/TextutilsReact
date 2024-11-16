import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
    }

    const handleClear = () =>{
        let newText = " ";
        setText(newText)
    }

    const[text, setText] = useState('Enter text here');
    // text = "new text";       // wrong way to change the state
    // setText("new text");        // correct way to change the state
    return(                         // always it will return one segment not two or more
        <>
        <div className="form-group">
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange} id="my-text-area" rows="8" cols="100"></textarea>
            </div>
            <div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            </div> 
        </div>
        <div className='container my-3'>
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        </>
    )
}