import React from 'react'
import { User } from 'lucide-react';
import { UserRound, UserCircle, Users } from 'lucide-react';
import { FileText } from 'lucide-react';
import { Image } from 'lucide-react';

const Profile = () => {
  return (
        <div className=' w-full bg-zinc-100 rounded-lg flex flex-col justify-start items-start pt-10 px-2 border-gray-300  '>
           <div className='flex flex-col justify-center items-center w-full'>
             <UserCircle className="w-40 h-40 text-gray-700" />
             <h2 className='text-2xl font-semibold mt-4'>User</h2>
           </div>

           <div className=' flex justify-around  w-full border-2 border-gray-500 my-6 rounded-2xl py-5'>
                <div className='flex flex-col items-center'>
                    <Image className="w-6 h-6 text-gray-900" />
                    <h3 className='text-center'>Posts</h3>
                </div>
                <div  className='flex flex-col items-center'>
                    <Users />
                    <h3 className='text-center'>Followers</h3>

                </div>
                <div  className='flex flex-col items-center'>
                    <Users />
                        <h3 className='text-center'>Following</h3>
                </div>


           </div>
            
        </div>
  )
}

export default Profile