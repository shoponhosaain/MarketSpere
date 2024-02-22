import { useState } from "react";
import { useAuth } from './../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();
  const [status,setStatus] = useState();
  const [username,setUsername] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const [confirmPasswrod,setConfirmPassword] = useState();
  const {signup} = useAuth();
  const [error , setError] = useState();
  const [loading , setLoading] = useState();
  async function handleSubmit(e){
    e.preventDefault()
    if(password !== confirmPasswrod ){
      return setError("password dont match")
    }else{
      try{
        setError("");
        setLoading(true)
        await signup(email,password,username);
        setStatus(true);
        navigate('/profile');
      }catch(err){
        console.log(err);
        setLoading(false);
      }

    }
  }
    return (
  
      <>
      <div className="container" style={{ marginTop: "5rem" }}>
  <form className="newsletter-bg p-5" onSubmit={handleSubmit}>
    <h1 className="text-center font-xl font-bolt py-5">
      Market<span className="prime-color">Spere</span>
    </h1>
    <div className="mb-4">
      <label
        htmlFor="exampleInputEmail1 "
        className="form-label font-bolt prime-color"
      >
        Email address
      </label>
      <input
      required
      onChange={(e)=> setEmail(e.target.value)}
        type="email"
        className="form-control"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
      />
      <div id="emailHelp" className="form-text prime-color font-vsm">
        We'll never share your email with anyone else.
      </div>
    </div>
    <div className="mb-3">
      <label
        htmlFor="exampleInputPassword1"
        className="form-label font-bolt prime-color"
      >
        Username
      </label>
      <input
       onChange={(e)=> setUsername(e.target.value)}
        type="text"
        required
         className="form-control"
          id="exampleInputPassword1" />
    </div>
    <div className="mb-3">
      <label
        htmlFor="exampleInputPassword1"
        className="form-label font-bolt prime-color"
      >
        Password
      </label>
      <input
      required
      onChange={(e)=> setPassword(e.target.value)}
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <div className="mb-3">
      <label
        htmlFor="exampleInputPassword1"
        className="form-label font-bolt prime-color"
      >
        Confirm Password
      </label>
      <input
      required
      onChange={(e)=> setConfirmPassword(e.target.value)}
        type="password"
        className="form-control"
        id="exampleInputPassword1"
      />
    </div>
    <button type="submit" className="mt-4 login-btn">
      SignUp
    </button>

    {error && <p>{error} </p>}
    {status && <p className="font-md font-bold mt-4 prime-color">signup succes</p>}
  </form>
</div>

      </>
    );
  }
  
  export default SignupPage;
  