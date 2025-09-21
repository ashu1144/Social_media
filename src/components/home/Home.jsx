import React from 'react'
import Nav from '../navbar/Nav'
import LogIn from '../loginpage/LoginPage'
import Profile from '../profile/Profile'
import Suggestions from '../suggestions/Suggestions'

const Home = () => {
  return (
    <div>
      <div className='flex'>

        <div className='fixed left-0 w-full max-w-[20vw] h-screen flex flex-col justify-start items-start border-r-2 border-gray-100 pt-2 px-2   '>
        <Profile></Profile>
        </div>

        <div className='m-auto w-full max-w-[60vw] h-screen flex flex-col justify-start items-start pt-10 px-2 '>

        </div>

        <div className='fixed right-0 w-full max-w-[20vw] h-screen flex flex-col justify-start items-start border-l-2 border-gray-100   pt-5 px-2  '>
          <Suggestions></Suggestions>

        </div>

      </div>
        
        
    </div>
  )
}

export default Home