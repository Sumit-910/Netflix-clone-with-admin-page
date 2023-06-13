import { useContext, useState } from 'react';
import './login.scss';
import { AuthContext } from '../../authContext/AuthContext';

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { dispatch } = useContext(AuthContext);

  const handleLogin = async (e) => {
    e.preventDefault();
    Login({email, password}, dispatch)
  }

  return (
    <>
      <div className="login">
        <div className="top">
          <div className="wrapper">
            <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/330px-Netflix_2015_logo.svg.png" alt="" />
          </div>
          <div className="container">
            <form>
              <h1>Sign In</h1>
              <input type="email" placeholder='Email or Phone number' onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
              <button className="loginButton" onClick={handleLogin} >Sign In</button>
              <span>New to Netflix? <strong>Sign up now.</strong> </span>
              <small>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <strong>Learn more</strong>
              </small>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Login
