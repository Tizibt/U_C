
import React, { useState } from "react";
//import { Link } from "react-router-dom";
//import { toast } from "react-toastify";
import UserModel from "../model/userModel";
import { useNavigate } from "react-router-dom";

const Login= () => {
  const navigator=useNavigate( )
  
  const [formValues, setFormValues] = useState(new UserModel({}));

  const [formErrors, setFormErrors] = useState({});
  const handleSubmit=async (e)=>{
    e.preventDefault();
    axios.post('',{username,Email,mobile,password})
    .then(result=>console.log(result))
    if(result.data==="success"){

    
    }navigator('/Formes')
  
    .catch(err=>console.log(err))
    console.log(formValues);
  }
  
  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={()=>{}}>
        <div className="form-group">
          <label>Username</label>
          <input
            type="text"
            placeholder="Enter your username"
            name="username"
            value={formValues.username}
            onChange={()=>{}}
           
          />
         {formErrors.username?<span className="error-message">{formErrors.username}</span>:''} 
    
        
          {formErrors.email?<span className="error-message">{formErrors.email}</span>:''} 
        </div>
        <div className="form-group">
          <label>Mobile No</label>
          <input
            type="name"
            name="user"
            placeholder="Enter your user name"
            value={formValues.mobile}
            onChange={()=>{}}
          />
          
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="number"
            name="password"
            placeholder="Enter your password"
            value={formValues.password}
            onChange={()=>{}}
          />
          {formErrors.password?<span className="error-message">{formErrors.password}</span>:''} 
        </div>
        <button type="Login" className="login-btn">
          log in 
        </button>
      </form>
      
    </div>
  );
  };
export default Login;