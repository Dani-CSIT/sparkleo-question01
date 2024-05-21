import React, { useState } from 'react';
import './SignIn.css';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
    };

    return (
        <div className="sign-in-container">
            <form onSubmit={handleSubmit} className="sign-in-form">
                <h1>Sign In</h1>
                <p>Enter your email and password to signIn..!</p>
                <label htmlFor="email" className="label">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input"
                />

                <label htmlFor="password" className="label">
                    Password
                </label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    minLength="8"
                    className="input"
                />

                <div className='checkBox'>
                    <label>
                        <input type="checkbox" />
                        Keep me logged in
                    </label>
                    <a href="/forgot-password">Forgot password?</a>
                </div>

                <button type="submit" className="button">
                    Sign In
                </button>
                <div className='lose-password'>
                    <span>Not registered yet?</span>
                    <a href="/create-account">Create an Account</a>
                </div>
            </form>
        </div>
    );
};

export default SignIn;