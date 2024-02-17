import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const navigate = useNavigate();

    const [isSignInForm, setIsSignInForm] = useState(true);

    const [errorMessage, setErrorMessage] = useState(null);

    const email = useRef(null);
    const password = useRef(null);

    const handleButtonClick = () => {
        // Validation

        // console.log(email.current.value);
        // console.log(password);
        const message = checkValidData(email.current.value, password.current.value);
        // console.log(message);
        setErrorMessage(message);

        if (message) {        // OR (message === null)
            return;
        }

        if (!isSignInForm) {
            // Sign Up Logic

            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    const user = userCredential.user;
                    // console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });

        } else {
            // Sign In

            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {

                    const user = userCredential.user;
                    // console.log(user);
                    navigate("/browse");
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage);

                });
        }
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/c0b69670-89a3-48ca-877f-45ba7a60c16f/2642e08e-4202-490e-8e93-aff04881ee8a/IN-en-20240212-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt='bg_image' />
            </div>
            <form
                onSubmit={(e) => { e.preventDefault() }}
                className='absolute p-12 bg-black w-3/12 my-36 mx-auto right-0 left-0 text-white bg-opacity-75 rounded-sm'>
                <h1 className='font-bold text-3xl py-4'>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!isSignInForm && (
                    <input
                        type="text"
                        placeholder="Full Name" className='p-4 my-4 w-full bg-gray-500 rounded-md ' />
                )}
                <input
                    ref={email}
                    type="text"
                    placeholder="Email or Phone Number"
                    className='p-4 my-4 w-full bg-gray-500 rounded-md ' />
                <input
                    ref={password}
                    type="password"
                    placeholder="Password" className='p-4 my-4 w-full bg-gray-500 rounded-md '
                />
                <p className='font-bold text-lg p-2 text-red-500'>
                    {errorMessage}
                </p>
                <button
                    type="submit"
                    className='p-4 my-6 bg-red-600 w-full rounded-md'
                    onClick={handleButtonClick}>
                    {isSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className='py-4 cursor-pointer'
                    onClick={toggleSignInForm}>
                    {isSignInForm ? "New to Netflix? Sign Up Now" : "Already a User? Sign In"}
                </p>
            </form>
        </div>
    )
}

export default Login
