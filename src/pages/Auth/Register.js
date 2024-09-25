import React, { useState } from 'react';
import "../../scss/_form.scss";
import "bootstrap/dist/js/bootstrap.bundle";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem } from '@fortawesome/free-solid-svg-icons';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';



const Register = () => {
  const [formData, setFormData] = useState({
    fullName: '',
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
    console.log('Register Form Data:', formData);
    // Add your form submission logic here
  };
// password vesible code 
const [passwordVisible, setPasswordVisible] = useState(false);

const togglePasswordVisibility = () => {
  setPasswordVisible(!passwordVisible);
};



  return (
    <main className='py-5' id='register'>

      <div className="card p-3 p-md-4 mx-auto border-0" style={{ maxWidth: 500 }} >
        <div className="container">

          <div className="row">
            <h2 className='text-center mb-4'>Register</h2>
            <form onSubmit={handleSubmit}>
              <div className="col-12 mb-3 ">
                <label htmlFor="fullName" className='d-block'>Full Name</label>
                <input type="text" name="fullName" placeholder="Full Name"  className='form-control' value={formData.fullName} onChange={handleChange} required />
              </div>
              <div className="col-12 mb-3 ">
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
              <div className="col-12 col-md-6 offset-md-3">
              <button className='btn btn-primary w-100' type='submit'>  <Link className='text-light text-decoration-none' to="/">Register</Link></button>
              </div>

            </form>
            <div className="col-12 mb-3 ">
            <p>Allready Have Account  <Link  to="/">Login here</Link></p>
            </div>
          </div>

        </div>

      </div>
    </main>

  );
};

export default Register;
