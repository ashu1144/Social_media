import React from 'react'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
const Signup = () => {
  return (

        <div className="flex flex-col justify-center gap-2 p-5 pl-10">
              <div className="gap-1">
                <h3 className="font-light">Getting start</h3>
                <h1 className="font-semibold text-[45px]  ">Sign up</h1>
              </div>
        
              <form action="" className="flex flex-col text-sm text-gray-700">
                <label htmlFor="email" className="mb-1 font-medium">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border border-gray-300 p-2 rounded-lg w-60 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />                
                
                
                <label htmlFor="email" className="mb-1 font-medium">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border border-gray-300 p-2 rounded-lg w-60 mb-3 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
        
                <label htmlFor="password" className="mb-1 font-medium">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="border border-gray-300 p-2 rounded-lg w-60 mb-5 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition-all"
                />
        
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