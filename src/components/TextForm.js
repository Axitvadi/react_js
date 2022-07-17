import React,{useState} from 'react'

export default function TextForm(props) {
    const handlerText = () => {
        let updatedText = text.toUpperCase();
       setText(updatedText)
    }
    const handleOnChange = (event) => {
        console.log("changed")
        setText(event.target.value)
    }
    const [text,setText] = useState("enter our text here !")
  return (
      <div>
        <h3>{props.heading}</h3>
          <div className="mb-3">
              <label htmlFor="box" className="form-label">Textarea</label>
              <textarea value={text} className="form-control" id="box" rows="10" onChange={handleOnChange}></textarea>
          </div>
          <button className="btn btn-primary" onClick={handlerText}>
                convert to uppercase
          </button>
      </div>
  )
}
