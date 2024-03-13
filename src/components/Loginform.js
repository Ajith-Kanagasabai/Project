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
  const handleInput = (event) =>{
    setInputs({...inputs,[event.target.name]:event.target.value})
  }
  const thank = () => {
    window.location='/Welcome';
  }
  return (
    <div className="form-container">
      <h2>Login</h2>
      <form onsubmit={handlesubmit}>
        <input type="email" name="email" placeholder="Email" required onChange={handleInput}/>
        { errors.email.required?(<span>Email is required</span>):null }
        <input type="password" name="password" placeholder="Password" required onChange={handleInput} />
        { errors.password.required?(<span>Password is required</span>):null }
        <button type="submit" onDoubleClick={thank}>Login</button>
      </form>
    </div>
  )
}

export default Loginform