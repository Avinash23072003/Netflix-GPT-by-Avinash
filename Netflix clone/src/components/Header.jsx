import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constans";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signOutMethod = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        // navigate("/error");
      });
  };
  const unsubscribe = useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
        // ...
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe;
  }, []);
  return (
    <div className=" w-full p-2  absolute z-10  bg-gradient-to-b from-black flex justify-between">
      <img src={LOGO_URL} alt="logo" className="w-[200px]" />
      {user && (
        <div className="pr-4 pt-4">
          <img src={user?.photoURL} className="w-10 h-14" />
          <button onClick={signOutMethod} className="text-white  text-center">
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};
export default Header;
