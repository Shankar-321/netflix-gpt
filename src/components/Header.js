import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";


const Header = () => {

    const navigate = useNavigate();

    const user = useSelector((store) => store.user);

    const dispatch = useDispatch();

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

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-48 "
                src={LOGO}
                alt="logo" />

            {user && <div className="flex p-2 ">
                <img
                    className="w-12 h-12 rounded-sm "
                    alt="userLogo"
                    src={user.photoURL} />

                <button
                    onClick={handleSignOut}
                    className="bg-white font-bold border border-black p-2 hover:bg-red-300 rounded-lg m-2">
                    Sign Out
                </button>
            </div>
            }
        </div>
    )
}

export default Header
