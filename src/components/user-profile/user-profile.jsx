import { motion } from "framer-motion";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { signOut } from "../../lib/helpers";
import { AnimatePresence } from "framer-motion";
import { slideUpOut } from "../../lib/animations";

const menuOptions = [
  {
    id: 1,
    label: "Profile",
    path: "/profile",
  },
  {
    id: 2,
    label: "Collections",
    path: "/collections",
  },
  {
    id: 3,
    label: "Projects",
    path: "/projects",
  },
];

export default function UserProfile() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const user = useSelector((state) => state?.user?.user);
  return (
    <div className="flex items-center justify-center gap-x-2 relative">
      {/* avatar  */}
      <motion.div
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        whileTap={{ scale: 0.9 }}
        className="w-7 h-7 flex items-center justify-center rounded-full bg-blue-400 overflow-hidden cursor-pointer"
      >
        {user?.photoURL ? (
          <img src={user.photoURL} alt="user" />
        ) : (
          <p className="text-sm">{user?.email[0].toUpperCase()}</p>
        )}
      </motion.div>

      {/* dropdown  */}
      {/* <motion.div whileTap={{ scale: 0.9 }} className="bg-zinc-800 rounded p-2">
        <FaChevronDown size={14} className="text-zinc-500 cursor-pointer " />
      </motion.div> */}

      {/* options menu  */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            {...slideUpOut}
            className="flex flex-col  justify-center bg-zinc-800 rounded px-2 py-3 absolute top-10 "
          >
            {menuOptions.map((item) => (
              <Link
                to={item.path}
                key={item.id}
                className="text-zinc-400 text-sm hover:bg-zinc-700 w-full px-2 py-1 rounded"
              >
                {item.label}
              </Link>
            ))}

            <motion.div
              onClick={signOut}
              whileTap={{ scale: 0.9 }}
              className="text-zinc-400 text-sm hover:bg-zinc-700 w-full px-2 py-1 rounded cursor-pointer"
            >
              Log Out
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
