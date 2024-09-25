import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Data:', formData);

    // Add your form submission logic here
  };

  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main className='py-5' id='register'>
      <div className="card p-3 p-md-4 mx-auto border-0" style={{ maxWidth: 500 }}>
        <div className="container">
          <div className="row">
            <div className="logo">
              <FontAwesomeIcon icon={faGem} size="2x" /><h2>CLARITY</h2>
            </div>
            <h2 className='text-center mb-4'>Login</h2>
            <p className='text-secondary'>Continue your design journey with Clarity.</p>
            <form onSubmit={handleSubmit}>
              <div className="col-12 mb-3">
                <label htmlFor="email" className='d-block'>Email Address</label>
                <input type="email" name="email" placeholder="Email Address" className='form-control' value={formData.email} onChange={handleChange} required />
              </div>
              <div className="col-12 mb-3">
                <label htmlFor="password" className='d-block'>Password</label>
                <div className="input-group">
                  <input type={passwordVisible ? "text" : "password"} name="password" placeholder="Password" className='form-control' value={formData.password} onChange={handleChange} required />
                  <span className="input-group-text">
                    <FontAwesomeIcon
                      icon={passwordVisible ? faEyeSlash : faEye}
                      onClick={togglePasswordVisibility}
                      className="password-toggle-icon"
                    />
                  </span>
                </div>
              </div>
              <div className="col-12 mb-3">
                <p style={{ textAlign: 'right' }}><Link to="/forgot-password">Forgot Password</Link></p>
              </div>
              <div className="col-12 col-md-6 offset-md-3 mb-3">
                <button className='btn btn-primary w-100' type='submit'>Login</button>
              </div>
            </form>
            <div className="col-12 mb-3">
              <p>Don't Have Account? <Link to="/register">Register here</Link></p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Login;
