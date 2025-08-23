import React from 'react';

const Login = () => {
  return (
    <div className="auth">
      <h1>Login</h1>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="password" placeholder="Password" required />
        
        <button type="submit">Login</button>
        
        <p className="error">This is an error!</p>
        
        <div className="redirect">
          Don't have an account? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;
