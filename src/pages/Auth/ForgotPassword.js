import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Forgot Password Email:', email);
    // Add your form submission logic 
  };

  return (

    <main className='py-5' id='register'>

    <div className="card p-3 p-md-4 mx-auto border-0" style={{ maxWidth: 500 }} >
      <div className="container">

        <div className="row">
        <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <div className="col-12 mb-3 ">
        <label htmlFor="email" className='d-block mb-3'>Email Address</label>
        <input type="email" name="email" className='form-control' placeholder="Email Address" value={email} onChange={handleChange} required />
      </div>
        <div className="col-12 col-md-6 offset-md-3">
        <button className='btn btn-primary w-100' type='submit'>  <Link className='text-light text-decoration-none' to="/">Reset Password and Login</Link></button>
      
              </div>
      </form>
        </div>

      </div>

    </div>
  </main>

  );
};

export default ForgotPassword;
