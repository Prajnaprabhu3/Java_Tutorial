import Input from "../ui/input";

export default function UserInput() {
  return (
    <div>
      <Input label="Email" placeholder="Email" type="email" />
      <Input label="Password" placeholder="Password" type="password" />
    </div>
  );
}
