import React from 'react'
import { Search as SearchIcon } from "lucide-react";
import { X } from "lucide-react";


const Search = ({isSearchVisible, setIsSearchVisible}) => {
  return (
    <div className="relative flex gap-2 items-center">
        <div className="relative flex-1">
    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
    <input
      type="text"
      placeholder="Search"
      className="w-full pl-10 pr-4 py-2 text-sm rounded-full bg-gray-100 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:outline-none transition-all"
    />
  </div>

  <div
    onClick={() => setIsSearchVisible(prev => !prev)}
    className="w-10 h-8 flex items-center justify-center rounded-full bg-gray-200 cursor-pointer hover:bg-red-500 hover:text-white transition-colors"
  >
    <X className="w-5 h-5" />
  </div>
     
    </div>
  )
}

export default Search