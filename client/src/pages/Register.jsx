import React from 'react';

const Register = () => {
  return (
    <div className="auth">
      <h1>Register</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        
        <button type="submit">Register</button>
        
        <p className="error">This is an error!</p>
        
        <div className="redirect">
          Do you have an account? <a href="/login">Login</a>
        </div>
      </form>
    </div>
  );
};

export default Register;
