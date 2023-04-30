// import React from 'react'
import React, { useState } from "react";


export default function TextForm(props){


    const [text, setText] = useState("");

  const handleUpClick = () => {
    // console.log("uppercase was clicke" + text)
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const handleLoClick = () => {
    // console.log("uppercase was clicke" + text)
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const handleClearClick = () => {
    // console.log("uppercase was clicke" + text)
    let newtext = "";
    setText(newtext);
  };

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };

  
  return (
    <div className="container" style={{color:props.mode==="dark"?"white":"#042743"}}>
      <h1>{props.heading} </h1>
      <div className="mb-3 my-10" >
        {/* <label for="myBox" className="form-label">Email address</label> */}

        <textarea
          className="form-control my-10"
          id="myBox"
          value={text}
          onChange={handleOnChange}
          rows="10"
          style={{backgroundColor:props.mode ==='dark'?"grey":"white",color:props.mode ==='dark'?"white":"#042743"}}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>
        Convert to uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleClearClick}>
        Clear
      </button>
      <div className="container" style={{color:props.mode==='dark'?"white":"#042743"}}>
        <h2>Text summary</h2>
        <p>
          No of charcters:{text.length} And No of words :
          {text.split(" ").length}{" "}
        </p>
        <p>{0.008 * text.split("").length} minutes read</p>
        <p>Preview</p>
        <p>{text.length>0?text:"Enter some Text First"}</p>
      </div>
    </div>
  );
}
