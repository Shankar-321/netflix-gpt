import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt='bg_image' />
            </div>
            <form className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-sm'>
                <h1 className='font-semi-bold text-3xl py-4'>Sign In</h1>
                <input type="text" placeholder="Email or Phone Number" className='p-4 my-4 w-full bg-gray-500 rounded-md ' />
                <input type="password" placeholder="Password" className='p-4 my-4 w-full bg-gray-500 rounded-md ' />
                <button type="submit" className='p-4 my-6 bg-red-600 w-full rounded-md'>Sign In</button>
                <p className='py-4'>New to Netflix? Sign Up Now</p>
            </form>
        </div>
    )
}

export default Login
