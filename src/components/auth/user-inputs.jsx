import { useState } from "react";
import Input from "../ui/input";

export default function UserInput() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div className="flex flex-col gap-y-4 mt-4">
      <Input
        label="Email"
        placeholder="Email"
        type="email"
        setState={setEmail}
      />
      <Input
        label="Password"
        placeholder="Password"
        type="password"
        setState={setPassword}
      />
    </div>
  );
}
