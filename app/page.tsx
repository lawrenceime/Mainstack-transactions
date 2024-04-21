import Image from "next/image";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
    <div className="bg-[#EDE5FE] w-screen h-screen flex justify-center items-center">
      <div className="w-[75%] h-[85%] bg-[#ffff] ">
      <Navbar/>

      </div>

    </div>
    </>
  );
}
