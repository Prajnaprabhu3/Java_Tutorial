import { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GoSearch } from "react-icons/go";
import Button from "../components/ui/button";
import { useSelector } from "react-redux";
import UserProfile from "../components/user-profile/user-profile";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const user = useSelector((state) => state.user?.user);

  return (
    <div className="flex">
      <div
        className={`h-screen flex relative bg-zinc-800 drop-shadow-lg border-r border-zinc-700 ${
          isSidebarVisible ? "w-24 xl:w-60" : "w-0"
        } `}
      >
        <motion.div
          whileTap={{ scale: 0.95 }}
          onClick={() => setIsSidebarVisible(!isSidebarVisible)}
          className="w-8 h-8 bg-zinc-900 border-t border-r border-b border-zinc-800 rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer"
        >
          <HiChevronDoubleLeft className="text-white" />
        </motion.div>

        <div className="overflow-hidden w-full flex flex-col items-center text-white gap-4 my-5">
          {/* logo  */}
          <Link to="/home">logo</Link>

          <div className="my-4 flex flex-col gap-y-3 items-center">
            {/* nav links  */}
            <Link
              to="/project"
              // className="bg-gray-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-gray-200 hover:dark:bg-zinc-700 flex items-center gap-1.5 px-2.5 py-1.5 my-2 drop-shadow-sm rounded text-xs transition-all duration-300 ease-out cursor-pointer"
              className="bg-gray-100 dark:bg-zinc-800 border border-zinc-300 dark:border-zinc-700 hover:bg-gray-200 hover:dark:bg-zinc-700 flex items-center gap-1.5 px-8 py-1.5 my-2 drop-shadow-sm rounded text-sm text-gray-300 transition-all duration-300 ease-out cursor-pointer"
            >
              New Project
            </Link>

            {user && (
              <Link to="/" className="text-sm text-gray-300">
                All Projects
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="w-full px-10">
        <div className="flex justify-start gap-x-4 px-4 md:px-12 py-4 md:py-6 items-center">
          {/* searchbar  */}
          <div className="flex items-center gap-x-4 bg-zinc-800 w-full px-4 py-2 rounded-md border border-zinc-800">
            <GoSearch className="text-zinc-400" />
            <input
              type="text"
              placeholder="Search project here"
              className="bg-zinc-800 text-sm"
            />
          </div>

          {/* user avatar or login  */}
          {user ? (
            <UserProfile />
          ) : (
            <Link to={"/auth"}>
              <Button
                text="Login"
                customClass="bg-white text-black hover:bg-gray-300 transition-all duration-300 text-sm w-20"
              />
            </Link>
          )}
        </div>

        {/* all projects  */}
        <div>{user ? "" : ""}</div>
      </div>
    </div>
  );
}
