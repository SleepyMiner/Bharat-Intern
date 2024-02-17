import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaKey } from "react-icons/fa";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function SignUp() {
  const [password, setPassword] = useState("password");
  const [login, setLogin] = useState(false);
  const [errorMsg, setErrorMsg] = useState("error");
  return (
    <>
      <div className="flex justify-center items-center mt-6">
        <div className="flex flex-col flex-wrap bg-gray-200 shadow-xl items-center justify-center gap-10 w-[500px] h-5/6 pt-4 rounded-lg">
          {login ? (
            <h1 className="text-3xl">Login</h1>
          ) : (
            <h1 className="text-3xl">Register</h1>
          )}
          <form action="#" id="" className="flex-col flex gap-6">
            {login ? (
              <div></div>
            ) : (
              <div className="flex items-center gap-4">
                <FaUser />
                <input
                  type="text"
                  placeholder="Username"
                  className="rounded-md px-4 py-1 focus:outline-blue-600 focus:shadow-md"
                  required
                />
              </div>
            )}
            <div className="flex items-center gap-4">
              <MdEmail />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="rounded-md px-4 py-1 focus:outline-blue-600 focus:shadow-md"
                required
              />
            </div>
            <div className="flex items-center gap-4">
              <FaKey />
              <input
                type={password}
                name="password"
                id="password"
                placeholder="Password"
                className="rounded-md px-4 py-1 focus:outline-blue-600 focus:shadow-md"
                required
              />
              <div
                onClick={() => {
                  password === "text"
                    ? setPassword("password")
                    : setPassword("text");
                }}
                className="cursor-pointer"
              >
                {password === "password" ? <FaEye /> : <FaEyeSlash />}
              </div>
            </div>

            <button
              className="border border-gray-500 hover:bg-gray-600 hover:text-white duration-200 h-10 w-20 mx-24 "
              type="submit"
            >
              {login ? "Login" : "Sign Up"}
            </button>
            <div className="mb-4">
              {login ? (
                <p className="text-center">
                  Don't have an account?{" "}
                  <span
                    className="underline text-blue-600 cursor-pointer"
                    onClick={() => {
                      setLogin(false);
                    }}
                  >
                    Register
                  </span>
                </p>
              ) : (
                <p className="text-center">
                  Already have an account?{" "}
                  <span
                    className="underline text-blue-600 cursor-pointer"
                    onClick={() => {
                      setLogin(true);
                    }}
                  >
                    Login
                  </span>
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignUp;
