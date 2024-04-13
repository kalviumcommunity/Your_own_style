import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Signup() {
  const [action, setAction] = useState("Login");
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowForm(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className='bgimg'>
        <img src="https://wallpaperboat.com/wp-content/uploads/2019/11/boutique-11.jpg" alt="" />
      </div>
       
      <h2 className={showForm ? 'wel show' : 'wel'}>WELCOME TO YOUR_OWN_STYLE</h2>
      
      {showForm && (
        <div className='containers'>
          <div className='header'>
            <div className='text2'>{action}</div>
            <div className='underline'>
              <div className='inputs'>
                <div className='input'>
                  <img src="" alt="" />
                  <input type="text" placeholder='Name'/>
                </div>
                <div className='input'>
                  <img src="" alt="" />
                  <input type="email" placeholder='Email Id' />
                </div>
                <div className='input'>
                  <img src="" alt="" />
                  <input type="password" placeholder='password' />
                </div>
                <div className='forgotpassword'>Lost password?<span>Click Here!</span></div>
                <div className='submit-container'>
                  <Link to="/home" className={action === "Login" ? "submit gray" : "submit"} onClick={() => { setAction("Sign up") }}>Sign up</Link>
                  <Link to="/home" className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => { setAction("Login") }}>Login</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Signup;
