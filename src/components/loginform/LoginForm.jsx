import React, { useState } from "react";
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const LoginForm = () => {
  const [input, setInput] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.email || !input.password) {
      setError('Email and password are required.');
      return;
    }
    setError('');
    // ...submit logic here...
  };

  return (
    <div className="flex flex-col justify-center gap-2 px-10 py-4">
      <div className="gap-1">
        <h2 className="text-[35px] font-medium bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent">
          Mygram
        </h2>
        <h3 className="font-light">welcome back!!!</h3>
        <h1 className="font-semibold text-[45px]  ">Login</h1>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col text-sm text-gray-700">
        <label htmlFor="email" className="mb-1 font-medium">
          Email
        </label>
        <input
          type="text"
          name="email"
          placeholder="Username"
          className="border border-gray-300 p-2 rounded-lg w-60 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
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

        {error && <span className="text-red-500 mb-2">{error}</span>}

        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg w-60 hover:bg-blue-600 transition-colors">
          Login
        </button>
      </form>
      <div className="text-end cursor-pointer">
        <Link to='/signup' className='text-sm font-light'>create account</Link>
      </div>

      <div className="flex gap-5 mt-3 justify-center items-center">
        <FaInstagram className="w-8 h-8 text-pink-500 cursor-pointer" />
        <FaGithub className="w-8 h-8 text-gray-800 cursor-pointer" />
        <FcGoogle className="w-8 h-8 cursor-pointer" />
      </div>
    </div>
  );
};

export default LoginForm;
