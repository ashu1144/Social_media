import React from 'react'
import Search from './Search'
import { Home, Search as SearchIcon, PlusSquare, Heart, User } from "lucide-react";
import { useState } from 'react';
import { NavLink } from 'react-router-dom'
const Nav = () => {
    const [isSearchVisible, setIsSearchVisible] = useState(false);

  return (
     <nav className="fixed top-0 left-0 right-0 bg-white border-b shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14">

        {/* Logo */}
        <NavLink to="/" >
           <div className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 bg-clip-text text-transparent cursor-pointer">Mygram</div>
        </NavLink>
       


        {/* Icons */}
        <div className="flex justify-end items-center space-x-5  w-full max-w-[500px] max-sm:max-w-[250px] ">
         <div className={` p-2
          relative overflow-hidden transition-all duration-700  
          ${isSearchVisible ? "max-w-[500px] opacity-100 scale-100 ease-in " : "max-w-0 opacity-0 scale-95 ease-in-out"} 
          w-full transform
        `}>
            <Search isSearchVisible = {isSearchVisible} setIsSearchVisible={setIsSearchVisible} />
            </div> 

            {!isSearchVisible &&<>
                <SearchIcon className="w-6 h-6 cursor-pointer hover:text-pink-500 " onClick={()=>{setIsSearchVisible(prev=>!prev) }} />
                <PlusSquare className="w-6 h-6 cursor-pointer hover:text-pink-500" />
                <Heart className="w-6 h-6 cursor-pointer hover:text-pink-500" />
                <NavLink to="/login" className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-600'}>
                <User className="w-6 h-6 cursor-pointer hover:text-pink-500" />
                </NavLink>
                
            
            </> }
          {/* Lucide Search icon only on small screens */}

        </div>
      </div>
    </nav>
  )
}

export default Nav