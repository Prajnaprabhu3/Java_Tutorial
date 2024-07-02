import { useState } from "react";
import { HiChevronDoubleLeft } from "react-icons/hi";

export default function Home() {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  return (
    <>
      <div
        className={`h-screen flex relative bg-gray-800 ${
          isSidebarVisible ? "w-2" : "w-24 xl:w-48"
        } `}
      >
        <div className="w-8 h-8 bg-gray-800 rounded-tr-lg rounded-br-lg absolute -right-6 flex items-center justify-center cursor-pointer">
          <HiChevronDoubleLeft className="text-white" />
        </div>
      </div>

      <div></div>
    </>
  );
}
