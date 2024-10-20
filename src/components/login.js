import React from 'react';
import '../styles/login.css';

const Login = () => {
  return (
    <div className="container">
        <div className="form-container">
            <h2 className="title">Connexion</h2>
            <input type="email" className="input" placeholder="Mail" required />
            <input type="password" className="input" placeholder="Password" required />
            <button type="submit" className="button">Connect</button>
            <p className="create-account">Don't have ? <a href="/create-account">Create an account</a></p>
            </div>
    </div>
  );
};

export default Login;
