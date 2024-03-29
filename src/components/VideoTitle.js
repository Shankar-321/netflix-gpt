import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className='pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video text-white '>
            <h1 className='font-bold text-4xl'>
                {title}
            </h1>
            <p className='py-6  text-md w-1/4'>
                {overview}
            </p>
            <div>
                <button className='bg-white p-4 px-8 font-bold text-black rounded-lg hover:bg-opacity-80'>▶ Play</button>
                <button className='bg-gray-500 p-4 px-8 mx-2 font-bold text-white opacity-50 hover:opacity-100 rounded-lg '>ℹ️ More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle
