import { useState, useRef } from "react";
import Header from "./Header";
import { Validation } from "../utils/Validation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const changeSignInSignUP = () => {
    setIsSignIn(!isSignIn);
  };
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const preventSubmit = (e) => {
    e.preventDefault();
  };

  const validationBtn = () => {
    console.log(email.current.value);
    console.log(password.current.value);
    const msg = Validation(email.current.value, password.current.value);
    setErrorMessage(msg);
    console.log(msg);
    if (msg) return;
    if (!isSignIn) {
      //sign Up logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "/Bhimfest  2k24.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              // navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
          console.log(user);
          //  navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode + " " + errorMessage);
          // ..
        });
    } else {
      // Sign In
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
          // Additional actions after sign-in can be added here
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(`${errorCode} ${errorMessage}`);
        });
    }
  };

  return (
    <div>
      <Header></Header>
      <div>
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/0552717c-9d8c-47bd-9640-4f4efa2de663/537e2c5e-c750-4d4c-9f7a-e66fe93eb977/IN-en-20240701-POP_SIGNUP_TWO_WEEKS-perspective_WEB_b00eeb83-a7e8-4b5b-8ff7-86ed92c51caf_small.jpg"
          className="absolute"
        />
      </div>
      <form
        onSubmit={preventSubmit}
        className=" w-[400px] h-[500px] p-12 absolute bg-black mx-auto mt-24 left-0 right-0 text-lg text-white gap-4 bg-opacity-80"
      >
        <h1 className="font-bold w-full text-3xl px-2 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 mt-8 w-full h-38 rounded-sm bg-slate-800"
          />
        )}

        <input
          ref={email}
          type="text"
          placeholder="E-mail"
          className="p-2 mt-8 w-full h-38 rounded-sm bg-slate-800"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          required
          className="p-2 mt-8 w-full rounded-sm  bg-slate-800"
        />
        <p className="text-red-500 font-bold pt-4">{errorMessage}</p>
        <button
          className="p-2 mt-6 bg-red-700 w-full rounded-sm"
          onClick={validationBtn}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 my-2 cursor-pointer" onClick={changeSignInSignUP}>
          {isSignIn
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In."}
        </p>
      </form>
    </div>
  );
};
export default Login;
