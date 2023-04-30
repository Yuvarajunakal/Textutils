import React, { useState } from "react";
import "./App.css";
// import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import Alert from "./Components/Alert";

function App(props) {

  const [mode,setMode] = useState("light")
  // const [alert,setAlert] = useState(null)

  // const showAlert = () =>{
  //   setAlert({
  //     msg:message,
  //     type:type
  //   })
  // }

  const toggleMode =()=>{
    if(mode==="light"){
      setMode("dark")
      document.body.style.backgroundColor="#042743"
      // showAlert("dark mode has unabled" , "success");
    }else{
      setMode("light")
      document.body.style.backgroundColor="white"
      // showAlert("dark mode has been disbled" , "success");
    }
  }


  return (
    <>
      <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} />
      {/* <Alert  alert={alert}/> */}
      <div className="container my-10">
        <TextForm heading="Enter the text to Analayze" mode={mode} />

        {/* <About /> */}
        
      </div>
    </>
  );
}

export default App;
