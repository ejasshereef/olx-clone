import React,{useState} from 'react';

import Logo from '../../olx-logo.png';
import './Login.css';


import { signInWithEmailAndPassword,getAuth } from 'firebase/auth';
import { Link, useNavigate } from 'react-router-dom';
import firebase from '../../firebase/config';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errMsg, setErrMsg] = useState('')
  const nav=useNavigate()


  const handleLogin=(e)=>{
    e.preventDefault()
    const auth=getAuth(firebase)
    signInWithEmailAndPassword(auth,email,password)
    .then(()=>{
      nav('/')
    })
    .catch((err)=>{
      console.log(err.message);
      let error = err.message.split("/")[1].split(")")[0].trim();
      setErrMsg(error)
      setTimeout(() => {
        setErrMsg('');
      }, 3000); // Clear error message after 3 seconds
    })
  }




  return (
    <div>
      <div className="loginParentDiv">
        <img width="200px" height="200px" src={Logo}></img>
        <form onSubmit={handleLogin}> 
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <Link to={"/signup"}>Signup</Link>
      </div>
    </div>
  );
}

export default Login;
