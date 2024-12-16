import { RiSearch2Line } from "react-icons/ri";
import { VscSettings } from "react-icons/vsc";
import { IoHeartSharp, IoNotifications } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
  <>
<div className='w-full max-w-[1440px] h-[141px] border-slate-1000 border-b-8 bg-grey text-white'> 
  <div className='w-full max-w-[1365px] border-slate-800 border-r-2 mt-9 bg-white text-white flex flex-row h-[40px]'> 
    <div className="flex items-center"> 
      <Image className="ml-2" src="/NavbarAssets/logo-type.jpg" alt="Logo" width={32} height={32} /> 
      <p className="font-bold text-black text-base ml-3"> High Fidelity Dashboard - Home Rent </p> 
    </div> 
    <h1 className='text-slate-600 ml-auto flex mt-2'> 
      Latest updated: <p className='text-black font-semibold'>8 Aug 2022</p> 
    </h1> 
  </div> 
</div>

<div className="w-full max-w-[1440px] h-[124px] flex justify-between items-center bg-white border-b border-gray-200">
  <nav className="container mx-4 sm:mx-9 flex items-center justify-between py-4 px-6 lg:px-0">
    {/* Logo & Search */}
    <div className="flex items-center space-x-8">
      {/* Logo */}
      <div className="text-[32px] font-bold text-[#3563E9]">MORENT</div>

      {/* Search Bar */}
      <div className="relative w-full sm:w-[492px] h-[44px] hidden lg:block">
        <input
          type="text"
          placeholder="Search something here"
          className="w-full h-full border rounded-full py-2 px-4 pl-12 pr-12 text-sm border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <RiSearch2Line />
        </div>
        <div className="absolute text-2xl right-4 top-1/2 transform -translate-y-1/2 text-gray-500">
          <VscSettings />
        </div>
      </div>
    </div>

    {/* Icons & Profile */}
    <div className="flex items-center space-x-6">
      <Link href="/favourite">
        <div className="relative">
          <IoHeartSharp className="text-2xl text-gray-600 cursor-pointer" />
        </div>
      </Link>
      <Link href="/notification">
        <div className="relative">
          <IoNotifications className="text-2xl text-gray-600 cursor-pointer" />
          <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>
      </Link>
      <Link href="/setting">
        <IoMdSettings className="text-2xl text-gray-600 cursor-pointer" />
      </Link>
      <Link href="/profile">
        <div className="w-10 h-10 rounded-full border overflow-hidden border-gray-300 flex items-center justify-center">
          <Image
            src="/NavbarAssets/profile.jpg"
            alt="Profile"
            width={40}
            height={40}
            className="rounded-full object-cover"
          />
        </div>
      </Link>
    </div>
  </nav>
</div>

    </>
  );
};

export default Navbar;