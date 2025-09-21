import React from 'react'
import cactus from '../../assets/cactus.png'
import Character from '../../assets/Character.png'
import { FaInstagram, FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { motion } from "framer-motion";
import LoginForm from '../loginform/LoginForm';
import SignupForm from '../singupform/SignupForm';


const Login = ({formComponent}) => {
  return (
    <div className='h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 via-purple-900 to-indigo-900  '>
        <div className='relative h-120 w-200  border rounded-4xl shadow-lg flex justify-between bg-zinc-200'>
            
            <div>
                {formComponent}
            </div>


              {/* right part */}
            <motion.img
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 , ease: "easeOut" }}
            src={Character} alt="" className='h-105 absolute right-20 bottom-2' />




            <div className='bg-[#C0DBEA] h-full w-80 rounded-4xl flex items-center justify-center flex-col p-10'>
                <img src={cactus} alt="" className='h-90' />
            </div>

        </div>
       
    </div>
  )
}

export default Login