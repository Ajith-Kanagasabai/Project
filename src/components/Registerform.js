import React, { useState } from 'react'

function Loginform() {
  const initialStateErrors = {
      email:{required:false},
      password:{required:false}, 
  }

  const [errors,setErrors] = useState({
    email:{required:false},
    password:{required:false},
  })
  const handlesubmit = (event) => {
    event.preventDefault();

    let errors = initialStateErrors;

    if(inputs.email ==="") {
      errors.email.required = true;
    }
    if(inputs.password ==="") {
      errors.email.required = true;
    }
    setErrors(errors);
  }
  const [inputs,setInputs] = useState ({
    email:"",
    password:"", 
  })
  const thanks = () => {
    alert("Thanks For Registering With Us!")
    window.location='/Welcome';
  }
  const handleInput = (event) =>{
    setInputs({...inputs,[event.target.name]:event.target.value})
  }
  return (
    <div className="form-container1">
      <h2>Register</h2>
      <form onsubmit={handlesubmit}>
        <input type="name" name="name" placeholder="Name" required onChange={handleInput}/>
        { errors.email.required?(<span>Email is required</span>):null }
        <input type="email" name="email" placeholder="Email" required onChange={handleInput} />
        { errors.password.required?(<span>Password is required</span>):null }
        <input type="password" name="password" placeholder="Password" required onChange={handleInput} />
        { errors.password.required?(<span>Password is required</span>):null }
        <button type="submit" onDoubleClick={thanks}>Login</button>
      </form>
    </div>
  )
}

export default Loginform