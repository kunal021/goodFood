// eslint-disable-next-line react/prop-types
import { Link } from "react-router-dom";
import { useState } from "react";
import bar from "../assets/bar.svg";
import x from "../assets/x.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <nav className="hidden lg:flex flex-wrap justify-center items-center gap-[40%] mx-6 py-1 px-4 ">
        <Link to="/">
          <img
            src="/logo.jpeg"
            alt="logo"
            className="rounded-full h-20 w-20 cursor-pointer"
          ></img>
        </Link>
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-6 mr-6">
            <li className="text-xl font-medium cursor-pointer">Indian</li>
            <li className="text-xl font-medium cursor-pointer">Japanese</li>
            <li className="text-xl font-medium cursor-pointer">Itailan</li>
          </ul>
          <button className="text-2xl font-semibold border-4 rounded-2xl border-black px-4 py-2">
            search
          </button>
        </div>
      </nav>
      {
        <nav className="lg:hidden flex flex-wrap justify-center items-center gap-[40%]">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="rounded-full h-20 w-20 cursor-pointer absolute top-4 left-12"
            ></img>
          </Link>
          <div className="flex justify-center flex-col mt-8 items-center">
            <button
              onClick={handleOpen}
              className={`flex justify-center items-center ${
                open && "bg-amber-300/90"
              } w-36 py-2`}
            >
              {open ? (
                <img src={x} className="h-10 w-10" />
              ) : (
                <img src={bar} className="h-10 w-10" />
              )}
            </button>
            {open && (
              <div className="flex flex-col justify-center items-center bg-amber-300/90 w-36">
                <ul className="flex flex-col justify-center items-center py-2">
                  <li className="text-xl font-medium cursor-pointer py-2">
                    Indian
                  </li>
                  <li className="text-xl font-medium cursor-pointer py-2">
                    Japanese
                  </li>
                  <li className="text-xl font-medium cursor-pointer py-2">
                    Itailan
                  </li>
                </ul>
                <button className=" text-2xl font-semibold border-4 rounded-2xl border-black px-4 py-2 mb-2">
                  search
                </button>
              </div>
            )}
          </div>
        </nav>
      }
    </div>
  );
}

export default Navbar;
