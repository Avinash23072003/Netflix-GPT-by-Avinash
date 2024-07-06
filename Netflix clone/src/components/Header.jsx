import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const signOutMethod = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className=" w-full p-2  absolute z-10  bg-gradient-to-b from-black flex justify-between">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
        className="w-[200px]"
      />
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
