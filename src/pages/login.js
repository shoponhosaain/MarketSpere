import { useState } from "react";
import { useAuth } from './../context/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
function Login() {
  const navigate = useNavigate();
  const [status,setStatus] = useState();
  const [email,setEmail] = useState();
  const [password,setPassword] = useState();
  const {login} = useAuth();
  const [error , setError] = useState();
  const [loading , setLoading] = useState();
  async function handleSubmit(e){
    e.preventDefault()
   
      try{
        setError("");
        setLoading(true)
        await login(email,password);
        setStatus(true);
        navigate('/profile');
      }catch(err){
        setError("failed to login")
        setLoading(false);
      

    }
  }
    return (
  
      <>
      <div className="container" style={{ marginTop: "10rem" }}>
  <form onSubmit={handleSubmit} className="newsletter-bg p-5">
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
        type="email"
        className="form-control bg-white"
        id="exampleInputEmail1"
        aria-describedby="emailHelp"
        required
        onChange={(e)=> setEmail(e.target.value)}
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
        Password
      </label>
      <input
       onChange={(e)=> setPassword(e.target.value)}
       required
        type="password"
        className="form-control bg-white"
        id="exampleInputPassword1"
      />
    </div>
    <button type="submit" className="mt-4 login-btn">
      Login
    </button>
    <Link>
    <button type="submit" className="mt-4 sign-up-btn ms-4 font-bolt">
      Sign Up
    </button>
    </Link>
    {status && <p className="font-md font-bold mt-4 prime-color">login succes</p>}
  </form>
</div>

      </>
    );
  }
  
  export default Login;
  