import React, {useState} from 'react'
export default function TextForm(props) {

    const handleUpClick = () =>{
        // console.log("uppercase was clicked")
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Uppercase has successfully applied","Success");
    }
    const handleOnChange = (event) => {
        // console.log("On change")
        setText(event.target.value)
    }

    const handleLoClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Lowercase has successfully applied","Success");
    }

    const handleClear = () =>{
        let newText = "";
        setText(newText)
        props.showAlert("Text has been cleared","Success")
    }

    const handleExtraSpaces = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces has removed","Success")
    }

    const[text, setText] = useState('Enter text here');
  return (
    <>
        <div className="form-group" >
            <h1>{props.heading}</h1>
            <div className="mb-3 my-3">
            <textarea className="form-control" value={text} onChange={handleOnChange}  id="my-text-area" rows="8" cols="10"></textarea>
            </div>
            <div>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleClear}>Clear</button>
            <button disabled={text.length === 0} className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Space</button>
            </div> 
        </div>
        <div className='container my-3 ' >
            <h2>Your text summary</h2>
            
            {/* {text.length == 0 ?(<p> {0} words and {text.length} characters</p>) :(<p>{text.split(" ").length} words and {text.length} characters</p>)} */}
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0 ? text : "Nothing to preview "}</p>
        </div>
    </>
  )
}
