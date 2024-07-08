import Button from "../ui/button";
import UserInput from "./user-inputs";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { signInWithGithub, signInWithGoogle } from "../../lib/helpers";

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  return (
    <div className="flex flex-col border p-6 rounded-lg border-zinc-800">
      <h4>Logo</h4>
      <p className="w-72 text-sm text-zinc-400 py-2">
        Welcome! Please give CodeSketch a try!
      </p>

      <UserInput />

      <Button
        text={isLogin ? "Login" : "Create"}
        customClass="bg-white text-black text-center text-sm my-5"
      />

      <p className="text-zinc-500 text-xs text-center">or continue with</p>

      <div className="flex items-center justify-center w-full gap-x-3 my-1">
        <Button
          action={signInWithGoogle}
          text="Google"
          icon={<FcGoogle size={16} />}
          customClass="text-sm border border-zinc-800 w-full"
        />
        <Button
          action={signInWithGithub}
          text="Github"
          icon={<FaGithub size={16} />}
          customClass="text-sm border border-zinc-800 w-full"
        />
      </div>

      <div className="text-zinc-400 text-xs flex items-center justify-center gap-x-1 my-2">
        <p>{isLogin ? "Don't have an account?" : "Already have an account?"}</p>
        <p
          className="text-white cursor-pointer"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create one" : "Login"}
        </p>
      </div>
    </div>
  );
}
