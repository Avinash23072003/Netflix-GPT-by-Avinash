import { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const changeSignInSignUP = () => {
    setIsSignIn(!isSignIn);
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
      <form className=" w-[400px] h-[500px] p-12 absolute bg-black mx-auto mt-24 left-0 right-0 text-lg text-white gap-4 bg-opacity-80">
        <h1 className="font-bold w-full text-3xl px-2 ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 mt-8 w-full h-38 rounded-sm bg-slate-800"
          />
        )}

        <input
          type="text"
          placeholder="E-mail"
          className="p-2 mt-8 w-full h-38 rounded-sm bg-slate-800"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-2 mt-8 w-full rounded-sm  bg-slate-800"
        />
        <button className="p-2 mt-6 bg-red-700 w-full rounded-sm">
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
