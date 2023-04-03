import React ,{useState} from 'react'

export default function TextForm(props) {
  
    const handleUpClick = () =>{
        console.log("Upper Case was clicked" +text)
        let newtext = text.toUpperCase()
        setText(newtext)
        props.showAlert("Converted to Uppercase",'danger')
    }

    const handleDownClick = () =>{
        console.log("Lower Case was clicked" +text)
        let newtext = text.toLowerCase()
        setText(newtext)
        props.showAlert("Converted to Lowercase",'danger')
    }

    const handleRevClick = () =>{
      console.log("Reverse was clicked" +text)
      let rev = text.split('').reverse()
      let newtext = rev.join('')

      setText(newtext)
      props.showAlert("String Reversed",'danger')
  }


    const handleOnChange = (event) =>{
        console.log("On Change Event Fired")
        setText(event.target.value)
    }

    const [text, setText] = useState('Enter Text Here');

  return (
    
<>

<div className='container' style={{color : props.mode === 'dark'? 'white ': '#042743'}}>
<div className="mb-3">
<h1>{props.heading}</h1>
  <textarea className="form-control" value={text} onChange = {handleOnChange}  style={{backgroundColor : props.mode === 'dark' ? 'grey ': 'white',color : props.mode === 'dark'? 'white ': '#042743'}}  id="myBox" rows="8"></textarea>
</div>

<button className="btn btn-primary mx-2 mb-2" onClick={handleDownClick}>Convert To Lowercase</button>
<button className="btn btn-primary mx-2 mb-2" onClick={handleUpClick}>Convert To Uppercase</button>
<button className="btn btn-primary mx-2 mb-2" onClick={handleRevClick}>Reverse String</button>
</div>

<div className="container" style={{color : props.mode === 'dark'? 'white': '#042743'}}>

<h2>Your Text Summary</h2>

<p>{text.split(' ').filter((ele)=>ele.length !== 0).length} Words and {text.length} Characters</p>
<p>{0.008 * text.split(" ").length } Minutes Read</p>

<h2>Preview</h2>

<p>{text.length >0?text:"Enter Something to Preview Here"}</p>

</div>

</>

  )
}
