import React from 'react'
import SuggestProfile from '../suggestionProfile/SuggestProfile'

const Suggestions = () => {
  return (
    <div className='w-full'>
        <h2 className='text-xl font-semibold mb-4'>Suggestions For You</h2>
        <div className=' '>
            <SuggestProfile></SuggestProfile>
            <SuggestProfile></SuggestProfile>
            <SuggestProfile></SuggestProfile>
            <SuggestProfile></SuggestProfile>
            <SuggestProfile></SuggestProfile>
            <SuggestProfile></SuggestProfile>
        </div>

    </div>
  )
}

export default Suggestions