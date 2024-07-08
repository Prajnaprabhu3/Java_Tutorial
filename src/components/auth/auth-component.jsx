import Button from "../ui/button";
import Input from "../ui/input";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { useState, useEffect } from "react";
import { signInWithGithub, signInWithGoogle } from "../../lib/helpers";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../config/firebase";
import { toast } from "sonner";

export default function AuthComponent() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailValidStatus, setIsEmailValidStatus] = useState(true);

  useEffect(() => {
    console.log(isEmailValidStatus);
  }, [isEmailValidStatus]);

  const createUser = async () => {
    if (isEmailValidStatus) {
      await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential) {
            console.log(userCredential);
          }
        })
        .catch((err) => console.log(err.message));
    }
  };

  const loginUser = async () => {
    if (isEmailValidStatus) {
      await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          if (userCredential) {
            console.log(userCredential);
          }
        })
        .catch((err) => {
          console.log(err.message);
          if (err.message.includes("invalid-credential")) {
            toast.error("Invalid Credentials");
          } else if (err.message.includes("missing-password")) {
            toast.error("Please enter the password!");
          } else if (err.message.includes("invalid-email")) {
            toast.error("Invalid Email");
          } else if (err.message.includes("user-not-found")) {
            toast.error("Try after sometime");
          }
        });
    }
  };

  return (
    <div className="flex flex-col border p-6 rounded-lg border-zinc-800">
      <h4>Logo</h4>
      <p className="w-72 text-sm text-zinc-400 py-2">
        Welcome! Please give CodeSketch a try!
      </p>

      <div className="flex flex-col gap-y-4 mt-4">
        <Input
          label="Email"
          placeholder="Email"
          type="email"
          setState={setEmail}
          setIsEmailValidStatus={setIsEmailValidStatus}
        />
        <Input
          label="Password"
          placeholder="Password"
          type="password"
          setState={setPassword}
        />
      </div>

      {isLogin ? (
        <Button
          action={loginUser}
          text="Login"
          customClass="bg-white text-black text-center text-sm my-5"
        />
      ) : (
        <Button
          action={createUser}
          text="Create"
          customClass="bg-white text-black text-center text-sm my-5"
        />
      )}
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
