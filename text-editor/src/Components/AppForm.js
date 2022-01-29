import React,{useState} from 'react'

export default function AppForm(props) {
        const handleToUpCase = () =>{
            let newText = text.toUpperCase();
            setText(newText); 
            props.showAlert('Converted to Uppercase' , 'success');       
        }
        const handleToLoCase = () =>{
            let newText = text.toLowerCase();
            setText(newText);        
            props.showAlert('Converted to Lowercase' , 'success');       
        }
        const handleToClear = () =>{
            // console.log("click"  + text);
            let newText = " ";
            setText(newText);        
            props.showAlert('Text area has been clear' , 'success');       
        }
        const handleToCopy = () =>{
            navigator.clipboard.writeText(text);
            props.showAlert('Text has been copied' , 'success');       
        }
        
        const handleToRemoveExtraSpaces = () =>{
            let newText = text.split(/[ ]+/);
            setText(newText.join(" "))
            props.showAlert('Extra spaces has been removed' , 'success');       
        }
        const handelOnChange = (event) =>{
            setText(event.target.value);
        }

    const [text,setText] = useState('');
    return (
        <>
    <div className='container' style={{color: props.mode==='light'?'#343434':'white'}}> 
        <h1>{props.heading}</h1>
            <div className="mb-3" >
                <textarea className="form-control" placeholder='Enter the text' value={text} onChange={handelOnChange} style={{backgroundColor: props.mode==='light'?'white':'#343434' , color: props.mode==='light'?'black':'white'}} id="myBox" rows="8"></textarea>
            </div>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToUpCase}>Convert to UpperCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToLoCase}>Convert to LowerCase</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToClear}>Clear All</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToCopy}>Copy to clipboard</button>
            <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleToRemoveExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='light'?'#343434':'white'}}>
            <h1>Your text summary</h1>
            <p>{text.split(/\s+/).filter((element) => {return element.length!==0}).length} words</p>
            <p>{0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length >0?text:'Nothing to preview'}</p>
    </div>
    </>
    )
}

