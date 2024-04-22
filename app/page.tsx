import Image from "next/image";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <>
    
      <div className="w-screen h-screen bg-[#ffff] ">
      <Navbar/>
      <Sidebar/>

      </div>

   
    </>
  );
}
