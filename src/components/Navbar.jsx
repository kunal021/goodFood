// eslint-disable-next-line react/prop-types
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import bar from "../assets/bar.svg";
import x from "../assets/x.svg";

function Navbar() {
  const [open, setOpen] = useState(false);

  const location = useLocation();
  useEffect(() => {
    setOpen(false);
  }, [location]);

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
            className="rounded-full h-16 w-16 cursor-pointer"
          ></img>
        </Link>
        <div className="flex justify-center items-center">
          <ul className="flex justify-center items-center gap-6 mr-6">
            <Link to="/">
              <li className="text-xl font-medium cursor-pointer">Home</li>
            </Link>
            <Link to="/saved">
              <li className="text-xl font-medium cursor-pointer">Saved</li>
            </Link>
            {/* <li className="text-xl font-medium cursor-pointer">Japanese</li> */}
            {/* <li className="text-xl font-medium cursor-pointer">Itailan</li> */}
          </ul>
          {/* <button className="text-2xl font-semibold border-4 rounded-2xl border-black px-4 py-2">
            search
          </button> */}
        </div>
      </nav>
      {
        <nav className="lg:hidden flex flex-wrap justify-center items-center gap-[40%]">
          <Link to="/">
            <img
              src="/logo.jpeg"
              alt="logo"
              className="rounded-full h-16 w-16 cursor-pointer absolute top-4 left-12"
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
                <img src={x} className="h-8 w-8" />
              ) : (
                <img src={bar} className="h-8 w-8" />
              )}
            </button>
            {open && (
              <div className="flex flex-col justify-center items-center bg-amber-300/90 w-36">
                <ul className="flex flex-col justify-center items-center py-2">
                  <Link to="/">
                    <li className="text-xl font-medium cursor-pointer py-2">
                      Home
                    </li>
                  </Link>
                  <Link to="/saved">
                    <li className="text-xl font-medium cursor-pointer py-2">
                      Saved
                    </li>
                  </Link>

                  {/* <li className="text-xl font-medium cursor-pointer py-2">
                    Japanese
                  </li>
                  <li className="text-xl font-medium cursor-pointer py-2">
                    Itailan
                  </li> */}
                </ul>
                {/* <button className=" text-2xl font-semibold border-4 rounded-2xl border-black px-4 py-2 mb-2">
                  search
                </button> */}
              </div>
            )}
          </div>
        </nav>
      }
    </div>
  );
}

export default Navbar;
