import React from 'react'
import { UserCircle } from 'lucide-react';

const SuggestProfile = () => {
  return (
    <div className='flex mb-4 items-center justify-between w-full bg-zinc-100 p-2 rounded-lg'>
        <div className='flex items-center gap-3'>
             <UserCircle className="w-12 h-12 text-gray-700" />
            <h1 className='text-md font-light'>username</h1>
        </div>
        <button className='text-blue-500 font-semibold cursor-pointer'>Follow</button>  
    </div>
  )
}

export default SuggestProfile