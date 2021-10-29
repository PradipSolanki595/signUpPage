import React from "react";
import "./App.css"
import Form from "./components/Form";


function App () {

   function handleSubmit(e) {
    e.preventDefault();
    alert("Sign up successfully")
    }
  
    return(

      <div className="main_wrapper">
          <Form onSubmit={(e) => handleSubmit(e)} />
      </div>
      
    )
  }


 

export default App