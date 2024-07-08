import { useState } from "react";
import { LuEyeOff, LuEye } from "react-icons/lu";
import { motion } from "framer-motion";

export default function Input({
  label,
  placeholder,
  type,
  Icon,
  setState,
  setIsEmailValidStatus,
}) {
  const [value, setValue] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isEmailValid, setIsEmailValid] = useState(true);
  // const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleChange = (e) => {
    setValue(e.target.value);
    setState(e.target.value);

    if (type === "email") {
      const emailRegex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/;
      setIsEmailValid(emailRegex.test(value));
      setIsEmailValidStatus(emailRegex.test(value));
    }
  };
  return (
    <>
      <div className="-my-2">
        {value.trim().length > 0 && (
          <>
            {type === "email" && !isEmailValid && (
              <p className="text-xs text-red-500 text-start">
                Enter valid email!{" "}
              </p>
            )}

            {/* {type === "password" && !isPasswordValid && (
              <p className="text-xs text-red-500 text-start">
                Enter valid email!{" "}
              </p>
            )} */}
          </>
        )}
      </div>
      <div className="w-72 flex items-center justify-between gap-x-4 bg-zinc-800 px-4 py-2 rounded-md border border-zinc-800">
        <div>
          {Icon && <Icon />}

          <input
            type={
              type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : "text"
            }
            value={value}
            onChange={handleChange}
            className="bg-zinc-800 outline-none font-extralight text-sm text-zinc-400 placeholder:text-zinc-400"
            placeholder={placeholder}
          />
        </div>

        {type === "password" && (
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <LuEye className="text-zinc-500 cursor-pointer" />
            ) : (
              <LuEyeOff className="text-zinc-500 cursor-pointer" />
            )}
          </motion.div>
        )}
      </div>
    </>
  );
}
