
import React, { useState } from "react";
import {auth} from '../firebase';
import {useHistory} from 'react-router-dom'
function Register() {
  

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
const history=useHistory()
  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log( email, password);
    try{
        const result=await auth.createUserWithEmailAndPassword(email,password)
        window.M.toast({html: `Welcome ${result.user.email}`,classes:"green"})
        history.push('/')
    }
  catch{
    window.M.toast({html:'Allready Registered'})
  }
  };

  return (
    <div className="center container">
     
      <form onSubmit={(e) => handleSubmit(e)}>
        <div style={{marginTop:"12%"}} className="input-field ">
         
          <input 
            placeholder="Email"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Password"
            type="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn green">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
