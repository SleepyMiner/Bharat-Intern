import React from "react";
import { RiQuillPenFill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="flex flex-row gap-20 justify-between p-4  bg-slate-800 text-white text-xl">
        <Link to="/" className="flex gap-2">
          <RiQuillPenFill size={30} />
          BlogWrite
        </Link>

        <div className="flex gap-20">
          <Link to="/" className="hover:text-blue-600 duration-200">
            Home
          </Link>
          <Link to="#" className="hover:text-blue-600 duration-200">
            Write
          </Link>
        </div>
        <div className="flex gap-10">
          <Link to="/register" className="hover:text-blue-600 duration-200">
            Register
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
