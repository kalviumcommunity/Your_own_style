import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link from React Router
import axios from 'axios';
import Art from '../assets/Art.png';
import Navbar from './Navbar';


function Signup() {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [success, setSuccess] = useState(false);

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const navigate = useNavigate();

  function setCookie(name, value, daysToExpire) {
    let date = new Date();
    date.setTime(date.getTime() + daysToExpire * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  }

  const submit = (e) => {
    e.preventDefault();
    setCookie('username', userName, 365);
    setCookie('password', password, 365);
    setUserName('');
    setPassword('');
    setSuccess(true);
  }

  return (
    <>
       <div >
        <Navbar />
      </div>
      <div className='signup-body'>

      <div>
       <img src={Art} alt="" className='signup_log' />
    </div>
  <div id='signin_container'>
    <div id='form_bar'>
      {success ? (
        <div className='welcome'>
          <h2>Thank you! 🎉</h2>
          <Link to="/Home"><button>Go to Home Page</button></Link>
        </div>
      ) : (
        <div>
          <div className='welcome'>
            <h2>Welcome back 👋</h2>
            <p className='para2'>Today is a new day. It's your day. You shape it. <br />
              Sign in to have your own account</p>
            <p>Got it</p>
          </div>
          <div id='Body-content'>
            <div id='lform'>
              <form onSubmit={submit}>
                <div className='space-around'>
                  <label className='label1'>Username</label>
                  <input type="text" value={userName} onChange={handleUsernameChange} id='username' />
                </div>
                <div className='space-around'>
                  <label>Password:</label>
                  <input type="password" value={password} name="password" id="password" onChange={handlePasswordChange} />
                </div>
                <button className='login-button' type="submit">Sign In</button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
    
  </div>

      </div>
    
     
    </>
  );
}

export default Signup;
