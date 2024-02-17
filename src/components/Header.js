import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {

    const navigate = useNavigate();

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                navigate("/");
            })
            .catch((error) => {
                navigate("/error");
            });
    }

    return (
        <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between">
            <img className="w-48 "
                src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
                alt="logo" />

            <div className="flex p-2 ">
                <img
                    className="w-12 h-12 rounded-sm "
                    alt="logo"
                    src="https://occ-0-3433-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABa0E9eop5T2vtihjVGzaar3ENnWTpEdroljEdb_krS3Xc8X1hhHGKRC_yxJu3M9tOMA-Bv7TLr6kvck8pOiSbqD2eP1YYhk0kZ_JggrxMNs47OtQSYM5viaieVwwB3r3SgfJ64cUSRg8Fg.png?r=e6e" />

                <button
                    onClick={handleSignOut}
                    className="bg-white font-bold border border-black p-2 m-1 hover:bg-red-300 rounded-lg m-2">
                    Sign Out
                </button>
            </div>
        </div>
    )
}

export default Header
