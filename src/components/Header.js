import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";


const Header = () => {

    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

    const handleSignOut = () => {
        signOut(auth)
            .then(() => { })
            .catch((error) => {
                navigate("/error");
            });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {                                 // Executes When Sign IN OR Sign Up
                const { uid, email, displayName, photoURL } = user;
                dispatch(
                    addUser({
                        uid: uid,
                        email: email,
                        displayName: displayName,
                        photoURL: photoURL
                    })
                );
                navigate('/browse');
            } else {                        // Sign Out
                dispatch(removeUser());
                navigate("/");
            }
        });

        return () => unsubscribe();   //  Unsubscribe when component unmounts
    }, []);


    const handleGptSearchClick = () => {
        // Toggle GPT Search button
        dispatch(toggleGptSearchView());
    };

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value));
    };

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-48 "
                src={LOGO}
                alt="logo" />

            {user && (
                <div className="flex p-2 ">
                    {showGptSearch && (
                        <select className="px-2 m-2 bg-gray-900 text-white" onChange={handleLanguageChange}>
                            {
                                SUPPORTED_LANGUAGES.map((lang) => (
                                    <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>
                                ))}
                        </select>)}
                    <button
                        className="px-4 m-2 bg-red-700 text-white font-bold rounded-md"
                        onClick={handleGptSearchClick}
                    >{showGptSearch ? "Home" : "GPT Search"}</button>
                    <img
                        className="w-12 h-12 rounded-sm my-2"
                        alt="userLogo"
                        src={user.photoURL} />

                    <button
                        onClick={handleSignOut}
                        className="px-2 m-2 text-white font-bold bg-red-700 rounded-md">
                        Sign Out
                    </button>
                </div>
            )}
        </div>
    )
}

export default Header
