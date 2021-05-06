import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { invalidLoginSelector, login, loginSelector, signUp } from "../../redux-slice/loginSlice";

import "./Login.css";

const Login = () => {
  const [toggleSigninSignup, settoggleSigninSignup] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const invalidLogin = useSelector(invalidLoginSelector);

  const handleLogIn=(e)=>{
    e.preventDefault();
    if(!email||!password){
      return alert("Enter all details!")
    }

    dispatch(login({email, password}));

    setName('');
    setEmail('');
    setPassword('');
  }
  
  const handleSignUp=(e)=>{
    e.preventDefault();
    if(!name||!email||!password){
      return alert("Enter all details!")
    }

    dispatch(signUp({name, email, password}));

    setName('');
    setEmail('');
    setPassword('');
    settoggleSigninSignup(false);
  }

  return (
    <div className="login-container">
      {toggleSigninSignup ? (
        <form className="form-container" onSubmit={(e)=>handleSignUp(e)}>
        <input type="text" placeholder="Name" className="text-input" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder="Email" className="text-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <input type="text" placeholder="Password" className="text-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        <button className="login-btn" type="submit">
          Sign Up
        </button>
        <div className="register-signup-text">
          Already Registered?<span className="signup-span" onClick={()=>settoggleSigninSignup(false)}>Log In</span>
        </div>
      </form>
      ) : (
        <form className="form-container" onSubmit={(e) => handleLogIn(e)}>
          <input type="text" placeholder="Email" className="text-input" value={email} onChange={(e)=>setEmail(e.target.value)}/>
          <input type="text" placeholder="Password" className="text-input" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {invalidLogin?"*Invalid username or password!":null}
          <button className="login-btn" type="submit">
            Login
          </button>
          <div className="register-signup-text">
            Not Registered?<span className="signup-span" onClick={()=>settoggleSigninSignup(true)}>Sign Up</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
