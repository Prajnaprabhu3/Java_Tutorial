import { cn } from "../../lib/utils";

const Button = ({ text, icon, action, customClass }) => {
  return (
    <div
      className={cn(
        "flex items-center justify-center text-center gap-1.5 px-2.5 py-1 my-2 drop-shadow-sm rounded transition-all duration-300 ease-out cursor-pointer",
        customClass
      )}
      onClick={action}
    >
      {icon}
      {text}
    </div>
  );
};

export default Button;
