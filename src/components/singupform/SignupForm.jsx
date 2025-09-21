import React, { useState } from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Signup = () => {
  const [input, setInput] = useState({ username: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate = () => {
    if (!input.username || !input.email || !input.password) {
      return 'All fields are required.';
    }
    if (!input.email.includes('@gmail.com')) {
      return 'Email must contain @gmail.com';
    }
    if (!/[A-Z]/.test(input.password)) {
      return 'Password must contain at least one capital letter.';
    }
    if (!/\d/.test(input.password)) {
      return 'Password must contain at least one number.';
    }
    return '';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) {
      setError(validationError);
      return;
    }
    setError('');
    // ...submit logic here...
  };

  return (

        <div className="flex flex-col justify-center gap-2 p-5 pl-10">
              <div className="gap-1">
                <h3 className="font-light">Getting start</h3>
                <h1 className="font-semibold text-[45px]  ">Sign up</h1>
              </div>
        
              <form onSubmit={handleSubmit} className="flex flex-col text-sm text-gray-700">
                <label htmlFor="username" className="mb-1 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  placeholder="Username"
                  className="border border-gray-300 p-2 rounded-lg w-60 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                  value={input.username}
                  onChange={handleChange}
                />                
        
                <label htmlFor="email" className="mb-1 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="border border-gray-300 p-2 rounded-lg w-60 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                  value={input.email}
                  onChange={handleChange}
                />
        
                <label htmlFor="password" className="mb-1 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  className="border border-gray-300 p-2 rounded-lg w-60 mb-2 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                  value={input.password}
                  onChange={handleChange}
                />
        
                {error && <span className="text-red-500 mb-1">{error}</span>}
        
                <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-60 hover:bg-blue-600 transition-colors">
                  Sign-up
                </button>
              </form>
              <div className='text-end'>
                <Link to='/login' className='text-sm font-light'>already have account</Link>
              </div>
        
              <div className="flex gap-5 mt-3 justify-center items-center">
                <FaInstagram className="w-8 h-8 text-pink-500 cursor-pointer" />
                <FaGithub className="w-8 h-8 text-gray-800 cursor-pointer" />
                <FcGoogle className="w-8 h-8 cursor-pointer" />
              </div>
        </div>
  )
}

export default Signup